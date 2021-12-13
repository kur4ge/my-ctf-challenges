package api

import (
	"bytectf2021/little_article/internal/db"
	"bytectf2021/little_article/internal/model"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/microcosm-cc/bluemonday"
	uuid "github.com/satori/go.uuid"
)

func QueryArticles(c *gin.Context) {
	username := c.GetString("username")

	var pageNum, pageSize int
	var err error
	query := make(map[string]interface{})
	fmt.Println(c.Query("query"))
	err = json.Unmarshal([]byte(c.Query("query")), &query)
	if err != nil {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Something Went Wrong.",
		})
		return
	}
	if pageNum, err = strconv.Atoi(c.Query("pageNum")); err != nil {
		pageNum = 0
	}
	if pageSize, err = strconv.Atoi(c.Query("pageSize")); err != nil {
		pageSize = 36
	}
	allow := db.FilterQuery(&query, &[]string{"title", "author", "htmlcontent", "plaincontent", "submissiontime", "tag"})
	articles := []model.ArticleItemIndex{}

	db.DB.Select("`articles`.*, GROUP_CONCAT(`tags`.`tags`) as tags").Table("articles").Joins("LEFT JOIN tags ON articles.id = tags.aid", username).Where("(articles.author = ? OR articles.is_public = 1)", username).Where(*allow).Group("id").Limit(pageSize).Offset(pageSize * pageNum).Find(&articles)

	c.JSON(200, gin.H{
		"status":   0,
		"count":    len(articles),
		"articles": articles,
	})
}
func QueryArticle(c *gin.Context) {
	username := c.GetString("username")
	id := c.Param("ID")
	article := model.ArticleItemDetail{}
	if username == "admin" {
		db.DB.Select("`articles`.*, GROUP_CONCAT(`tags`.`tags`) as tags").Table("articles").Joins("LEFT JOIN tags ON articles.id = tags.aid").Where("id = ?", id).Group("id").Find(&article)
	} else {
		db.DB.Select("`articles`.*, GROUP_CONCAT(`tags`.`tags`) as tags").Table("articles").Joins("LEFT JOIN tags ON articles.id = tags.aid").Where("(articles.author = ? OR articles.is_public = 1)", username).Where("id = ?", id).Group("id").Find(&article)
	}
	c.JSON(200, gin.H{
		"status": 0,
		"data":   article,
	})
}

func PreviewArticles(c *gin.Context) {
	title := c.PostForm("title")
	content := c.PostForm("content")
	c.HTML(http.StatusOK, "preview.tmpl", gin.H{
		"title":   template.HTML(title),
		"content": template.HTML(content),
	})
}

func AddArticles(c *gin.Context) {
	username := c.GetString("username")
	json := model.JSONArticle{}
	err := c.BindJSON(&json)
	if err != nil {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Something Went Wrong.",
		})
		return
	}
	strict := bluemonday.StrictPolicy()
	ugc := bluemonday.UGCPolicy()
	article := model.Article{
		ID:             uuid.NewV4().String(),
		Title:          json.Title,
		Author:         username,
		HtmlContent:    ugc.Sanitize(json.Content),
		PlainContent:   strict.Sanitize(json.Content),
		SubmissionTime: time.Now().Unix(),
		IsPublic:       false, // 免得出事 不公开了
	}
	if article.Title == "" || article.PlainContent == "" {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Something Went Wrong.",
		})
		return
	}
	db.DB.Create(&article)
	if len(json.Tags) > 0 {
		tags := []model.Tag{}
		for _, tag := range json.Tags {
			tags = append(tags, model.Tag{
				Aid:  article.ID,
				Tags: tag,
			})
		}
		db.DB.Create(&tags)
	}
	c.JSON(200, gin.H{
		"status":  0,
		"id":      article.ID,
		"message": "Create success.",
	})
}
