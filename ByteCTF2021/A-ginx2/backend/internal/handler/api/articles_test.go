package api

import (
	"bytectf2021/little_article/internal/db"
	"bytectf2021/little_article/internal/model"
	"fmt"
	"testing"
)

func Test_QueryArticles(t *testing.T) {
	DB, err := db.Init()
	fmt.Println(DB, err)
	article := []model.Article{}
	query := map[string]interface{}{"a": "1", "title\\`": "aa"}
	allow := db.FilterQuery(&query, &[]string{"id", "title", "author", "htmlcontent", "plaincontent", "submissiontime"})

	ret := DB.Where(*allow).Find(&article)
	fmt.Println(ret)
	fmt.Println(article)
}
