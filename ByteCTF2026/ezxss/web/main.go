package main

import (
	"github.com/valyala/fasthttp"
)

func main() {
	fasthttp.ListenAndServe(":3000", func(c *fasthttp.RequestCtx) {
		url := string(c.FormValue("url"))
		if url != "" {
			c.Response.Header.Set("Location", url)
			c.Response.Header.SetStatusCode(302)
		} else {
			c.Response.Header.SetStatusCode(204)
		}
	})
}
