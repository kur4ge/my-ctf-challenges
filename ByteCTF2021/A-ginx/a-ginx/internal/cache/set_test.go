package cache

import (
	"fmt"
	"testing"
)

func Test_SetCache(t *testing.T) {
	e := SetCache("/css/main.css", []byte("233333"))
	fmt.Println(e)
}
