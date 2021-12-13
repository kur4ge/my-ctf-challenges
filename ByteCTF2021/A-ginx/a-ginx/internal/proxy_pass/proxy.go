package proxy_pass

import (
	"bufio"
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
	requestURI := r.URL.Path
	if r.URL.RawQuery != "" {
		requestURI += "?" + r.URL.RawQuery
	}
	req := fmt.Sprintf("%s %s HTTP/1.1\n", r.Method, requestURI)
	req += fmt.Sprintf("Host: %s\n", r.Host)
	req += fmt.Sprintf("X-Sup3r-Re4l-Ip: %s\n", r.RemoteAddr)
	for k, v := range r.Header {
		if k == "X-Sup3r-Re4l-Ip" {
			continue
		}
		req += fmt.Sprintf("%s: %s\n", k, v[0])
	}
	req += "Connection: Keep-Alive\n\n"

	if body != nil && r.ContentLength > 0 {
		req += string(body[:r.ContentLength])
	}
	return []byte(req)
}
