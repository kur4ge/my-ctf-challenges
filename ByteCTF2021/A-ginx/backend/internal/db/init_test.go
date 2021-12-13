package db

import (
	"fmt"
	"testing"
)

func Test_Init(t *testing.T) {
	db, err := Init()
	fmt.Println(db, err)
}
