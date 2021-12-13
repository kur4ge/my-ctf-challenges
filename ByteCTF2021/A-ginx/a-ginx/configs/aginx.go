package configs

var LISTEN = "0.0.0.0:443"

var PROXY_PASS = "web:80"

var ROOT = "/app/public/"

var CACHE_ROOT = "/app/cache"

var INDEX = "index.html"

var STATIC_PATHS = []string{
	"^/$",
	"^/static/",
}
