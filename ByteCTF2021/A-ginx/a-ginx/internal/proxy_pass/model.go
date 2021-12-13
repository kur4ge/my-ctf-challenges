package proxy_pass

import (
	"net"
	"sync"
)

type Proxy struct {
	Conn    *net.Conn  // TCP连接
	Lock    sync.Mutex // 锁
	Expried int64      // 过期时间戳
}
