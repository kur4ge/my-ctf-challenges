package user

import (
	"crypto/rand"
	"fmt"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

var jwtSecret, _ = GenerateRandomBytes(32)

func GenerateRandomBytes(n int) ([]byte, error) {
	b := make([]byte, n)
	_, err := rand.Read(b)
	// Note that err == nil only if we read len(b) bytes.
	if err != nil {
		return nil, err
	}

	return b, nil
}

func CreateToken(username string, exp int) (string, error) {
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
		"exp":      time.Now().Add(time.Second * time.Duration(exp)).Unix(),
	})
	token, err := at.SignedString(jwtSecret)
	if err != nil {
		return "", err
	}
	return token, nil
}

func ParseToken(token string) (string, error) {
	claim, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})

	if err != nil {
		return "", err
	}
	fmt.Println(claim)
	return claim.Claims.(jwt.MapClaims)["username"].(string), nil
}
