package server

import (
	"bytectf2021/little_article/internal/handler/api"
	"bytectf2021/little_article/internal/handler/flag"
	"bytectf2021/little_article/internal/handler/middleware"
	"bytectf2021/little_article/internal/handler/user"

	"github.com/gin-gonic/gin"
)

func BindHandler(r *gin.Engine) {

	r.GET("/v/tags", middleware.JWTMiddleware, api.Tags)
	r.POST("/v/articles/preview", api.PreviewArticles)
	r.POST("/v/articles", middleware.JWTMiddleware, api.AddArticles)
	r.GET("/v/articles", middleware.JWTMiddleware, api.QueryArticles)
	r.GET("/v/articles/:ID", middleware.JWTMiddleware, api.QueryArticle)

	r.POST("/v/login", user.Login)
	r.POST("/v/register", user.Register)

	r.GET("/flag", middleware.JWTMiddleware, flag.GetFlag)
}
