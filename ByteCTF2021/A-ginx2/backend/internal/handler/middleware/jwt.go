package middleware

import (
	"bytectf2021/little_article/internal/handler/user"
	"fmt"
	"strings"

	"github.com/gin-gonic/gin"
)

func JWTMiddleware(c *gin.Context) {
	auth := c.Request.Header.Get("Authorization")
	if auth == "" || !strings.HasPrefix(auth, "Bearer ") {
		c.Abort()
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Need Login.",
		})
		return
	}
	token := auth[7:]
	fmt.Println(token)
	username, _ := user.ParseToken(token)

	fmt.Println(username, auth)
	if username == "" {
		c.Abort()
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Need Login.",
		})
		return
	}
	c.Set("username", username)
	c.Next()
}
