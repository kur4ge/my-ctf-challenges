package flag

import (
	"bytectf2021/little_article/configs"
	"fmt"
	"net"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

var network = "172.16.0.0/12"

func GetFlag(c *gin.Context) {
	username := c.GetString("username")
	rip := c.Request.Header.Get(configs.SECRET_XFF)
	ip := net.ParseIP(strings.Split(rip, ":")[0])
	_, subnet, _ := net.ParseCIDR(network)

	if ip == nil {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": "Invalid address",
		})
		return

	} else if !subnet.Contains(ip) {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": fmt.Sprintf("Your ip is %s, not in %s.", ip, network),
		})
		return
	}

	if username != "admin" {
		c.JSON(200, gin.H{
			"status":  -1,
			"message": fmt.Sprintf("You are %s, not admin.", username),
		})
		return
	}
	flag := os.Getenv("FLAG")
	c.JSON(200, gin.H{
		"status": 0,
		"flag":   flag,
	})
}
