package middleware

import (
	"net/http"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

// uri trim
// 处理 ../ 的情况
func URITrimMiddleware(c *gin.Context) {
	paths := strings.Split(c.Request.URL.Path, "/")
	real_paths := []string{}
	for _, path := range paths {
		if path == ".." { // 说明出现 ../
			if l := len(real_paths); l > 0 {
				real_paths = real_paths[:l-1]
			}
			continue
		} else if path == "." {
			continue
		}
		real_paths = append(real_paths, url.QueryEscape(path))
	}
	if len(real_paths) != len(paths) {
		c.Abort()
		c.Redirect(http.StatusMovedPermanently, strings.Join(real_paths, "/"))
		return
	}
	c.Next()
}
