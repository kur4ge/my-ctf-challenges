package db

import (
	"fmt"
	"testing"
)

func Test_FilterQuery(t *testing.T) {
	query := map[string]interface{}{"a": "1", "title": "bbb"}
	allow := FilterQuery(&query, &[]string{"id", "title", "author", "htmlcontent", "plaincontent", "submissiontime"})
	fmt.Println(allow)
}
