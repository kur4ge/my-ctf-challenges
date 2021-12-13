package server

import (
	"bytectf2021/little_article/internal/handler/middleware"

	"github.com/gin-gonic/gin"
)

func BindMiddleware(r *gin.Engine) {
	r.Use(middleware.URITrimMiddleware)
}
