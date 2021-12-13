package cache

import (
	"fmt"
	"testing"
)

func Test_GetCache(t *testing.T) {
	d, k, e := GetCache("/css/main.css")
	fmt.Println(d, k, e)
}
