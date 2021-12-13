package server

import (
	"bytectf2021/little_article/internal/handler/middleware"

	"github.com/gin-gonic/gin"
)

func BindMiddleware(r *gin.Engine) {
	r.Use(middleware.URITrimMiddleware)
	/*
		r.Use(cors.New(cors.Config{
			AllowOrigins: []string{"*"},
			AllowMethods: []string{"POST"},

			AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
			ExposeHeaders:    []string{},
			AllowCredentials: true,
			AllowOriginFunc: func(origin string) bool {
				return true
			},
			MaxAge: 12 * time.Hour,
		}))
	*/
	// r.Use()
}
