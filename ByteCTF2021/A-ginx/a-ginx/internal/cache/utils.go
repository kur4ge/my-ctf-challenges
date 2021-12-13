package cache

import (
	"crypto/md5"
	"fmt"
)

func MakeKey(uri string) string {
	hash := fmt.Sprintf("%x", md5.Sum([]byte(uri)))
	return fmt.Sprintf("/%s/%s/%s", hash[0:2], hash[2:4], hash[4:])
}
