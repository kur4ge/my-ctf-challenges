package user

import (
	"bytectf2021/little_article/internal/db"
	"bytectf2021/little_article/internal/model"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	json := make(map[string]string)
	c.BindJSON(&json)
	if json["username"] == "" || json["password"] == "" {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "No username or password.",
		})
		return
	}
	user := model.User{}
	db.DB.Where("username = ? and password = ?", json["username"], json["password"]).Find(&user)
	if user.Username != "" {
		token, _ := CreateToken(user.Username, 3600*24*7)
		c.JSON(200, gin.H{
			"status":  0,
			"token":   token,
			"message": "Login success.",
		})
	} else {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Something Went Wrong.",
		})
	}
}
