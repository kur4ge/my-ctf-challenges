package user

import (
	"fmt"
	"testing"
)

func Test_jwt(t *testing.T) {
	token, err := CreateToken("admin", 3600)
	fmt.Println(token+"a", err)
	username, err := ParseToken(token)
	fmt.Println(username, err)
}
