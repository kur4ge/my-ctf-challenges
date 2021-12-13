package model

var UserColumn = []string{"id", "username", "password"}

type User struct {
	ID       int
	Username string `json:"username"`
	Password string `json:"password"`
}
