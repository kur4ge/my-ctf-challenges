package api

import (
	"bytectf2021/little_article/internal/db"

	"github.com/gin-gonic/gin"
)

type Tag struct {
	Tags string `json:"name"`
}

func Tags(c *gin.Context) {
	username := c.GetString("username")
	tags := []Tag{}
	db.DB.Table("tags").Select("DISTINCT tags.tags as tags").Joins("JOIN articles ON articles.id = tags.aid AND (articles.author = ? OR articles.is_public = 1)", username).Limit(10).Find(&tags)
	c.JSON(200, gin.H{
		"status": 0,
		"tags":   tags,
	})
}
