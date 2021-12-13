package configs

import "os"

var LISTEN = "0.0.0.0:443"

var PROXY_PASS = "web:80"

var ROOT = "/app/public/"

var INDEX = "index.html"

var STATIC_PATHS = []string{
	"^/$",
	"^/static/",
}

var SECRET_XFF = os.Getenv("SECRET_XFF")
