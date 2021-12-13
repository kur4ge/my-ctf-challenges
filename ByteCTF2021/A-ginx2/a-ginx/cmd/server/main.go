package main

import (
	"bytectf2021/aginx/configs"
	"bytectf2021/aginx/internal/proxy_pass"
	"bytectf2021/aginx/internal/static"
	"bytectf2021/aginx/internal/waf"
	"crypto/md5"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"mime"
	"net"
	"net/http"
	"path"
	"time"

	"golang.org/x/net/http2"
)

var Proxys = make(map[string]*proxy_pass.Proxy)

func main() {
	var srv http.Server
	http2.VerboseLogs = true
	srv.Addr = configs.LISTEN

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Server", "A-ginx")
		if r.Proto != "HTTP/2.0" {
			w.WriteHeader(http.StatusHTTPVersionNotSupported)
			return
		}
		proxy, err := getClient(r.RemoteAddr)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		body, _ := ioutil.ReadAll(r.Body)
		if len(r.URL.RawQuery) > 0 { // WAF
			err = waf.CheckDataString(r.URL.RawQuery)
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				w.Write([]byte(fmt.Sprintf("%v", err)))
				return
			}
		}
		if static.CheckStaticPath(r.URL.Path) { // 判断是否满足静态文件路径
			data, filename, err := static.GetStatic(r.URL.Path)
			if err == nil { // 无错误 命中缓存
				contentType := mime.TypeByExtension(path.Ext(filename))
				if contentType == "" {
					contentType = "application/octet-stream" // 兜底
				}
				w.Header().Set("Content-Type", contentType)
				w.Header().Set("Cache-Control", "max-age=31536000")
				w.Write(data)
				return
			}
		}

		resp, err := proxy_pass.DoProxy(proxy, r, body) //	发起代理请求
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		w.Header().Set("Trace-Id", fmt.Sprintf("%x", md5.Sum([]byte(fmt.Sprintf("%x-%s", proxy.Conn, r.RemoteAddr)))))
		body, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		proxy_pass.DoResponseHeader(w, resp)
		w.Write(body)
	})
	http2.ConfigureServer(&srv, &http2.Server{})
	go func() {
		log.Fatal(srv.ListenAndServeTLS("ssl/cert.pem", "ssl/key.pem"))
	}()
	select {}
}

func getClient(addr string) (proxy *proxy_pass.Proxy, err error) {
	if proxy = Proxys[addr]; proxy == nil {

		conn, err := net.Dial("tcp", configs.PROXY_PASS)
		if err != nil {
			fmt.Println("err : ", err)
			return nil, err
		}
		proxy = &proxy_pass.Proxy{
			Conn:    &conn,
			Expried: time.Now().Unix() + 10, // 5秒复用时间
		}
		Proxys[addr] = proxy
	} else {
		if proxy.Expried < time.Now().Unix() { // 超时了尝试关闭连接
			(*proxy.Conn).Close()                            // 强制关闭
			conn, err := net.Dial("tcp", configs.PROXY_PASS) // 重新创建连接
			if err != nil {
				return nil, err
			}
			proxy.Conn = &conn
		} else {
			_, err = (*proxy.Conn).Read(make([]byte, 0)) // try to read
			if err != nil && err != io.EOF {
				conn, err := net.Dial("tcp", configs.PROXY_PASS) // 重新创建连接
				if err != nil {
					return nil, err
				}
				proxy.Conn = &conn
			}
		}
		proxy.Expried = time.Now().Unix() + 10 // 刷新时间
	}
	go func(addr string) {
		trigger := time.After(time.Second * 10)
		<-trigger
		if proxy := Proxys[addr]; proxy != nil {
			if proxy.Expried < time.Now().Unix() { // 说明已经过期
				proxy.Lock.Lock() // 获取锁
				delete(Proxys, addr)
				fmt.Println("close", addr)
				(*proxy.Conn).Close()
				defer proxy.Lock.Unlock() // 获取锁
			}
		}
	}(addr)
	return proxy, nil
}
