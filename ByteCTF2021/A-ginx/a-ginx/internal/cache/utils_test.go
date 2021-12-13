package cache

import (
	"fmt"
	"testing"
)

func Test_MakeKey(t *testing.T) {
	p := MakeKey("/css/main.css")
	fmt.Println(p, "1d/ca/e0e31956c309448c47c3342e406d")
}
