package user

import (
	"bytectf2021/little_article/internal/db"
	"bytectf2021/little_article/internal/model"
	"crypto/sha256"
	"encoding/hex"

	"github.com/gin-gonic/gin"
)

func Hash(s string) string {
	h := sha256.New()
	h.Write([]byte(s))
	return hex.EncodeToString(h.Sum(nil))
}

func Register(c *gin.Context) {
	user := model.User{}
	c.BindJSON(&user)
	if user.Username == "" || user.Password == "" {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "No username or password.",
		})
		return
	}
	user.ID = 0
	if err := db.DB.Create(&user).Error; err != nil {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Something Went Wrong.",
		})
		return
	}
	c.JSON(200, gin.H{
		"status":  0,
		"message": "Register success.",
	})
}
