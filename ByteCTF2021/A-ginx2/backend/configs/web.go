package configs

import "os"

var LISTEN = "0.0.0.0:80"

var SECRET_XFF = os.Getenv("SECRET_XFF")
