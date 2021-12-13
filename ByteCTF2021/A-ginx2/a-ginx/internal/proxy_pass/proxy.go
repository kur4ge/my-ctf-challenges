package proxy_pass

import (
	"bufio"
	"bytectf2021/aginx/configs"
	"fmt"
	"net/http"
)

func DoProxy(proxy *Proxy, r *http.Request, body []byte) (*http.Response, error) {
	req := makeRequest(r, body)
	fmt.Println(string(req))
	proxy.Lock.Lock()
	defer proxy.Lock.Unlock()

	_, err := (*proxy.Conn).Write(req)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	buf := bufio.NewReader(*proxy.Conn)
	return http.ReadResponse(buf, r)
}

func DoResponseHeader(w http.ResponseWriter, r *http.Response) {
	for k, v := range r.Header {
		if k == "Content-Length" || k == "Server" {
			continue
		}
		w.Header().Set(k, v[0])
	}
	w.WriteHeader(r.StatusCode) // 设置状态码
}

func makeRequest(r *http.Request, body []byte) []byte {
	req := fmt.Sprintf("%s %s HTTP/1.1\n", r.Method, r.RequestURI)
	req += fmt.Sprintf("Host: %s\n", r.Host)

	req += fmt.Sprintf("%s: %s\n", configs.SECRET_XFF, r.RemoteAddr)
	for k, v := range r.Header {
		if k == configs.SECRET_XFF {
			continue
		}
		req += fmt.Sprintf("%s: %s\n", k, v[0])
	}
	req += "Connection: Keep-Alive\n\n"

	if body != nil {
		req += string(body)
	}
	return []byte(req)
}
