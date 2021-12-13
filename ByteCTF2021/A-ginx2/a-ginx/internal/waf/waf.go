package waf

import (
	"fmt"
	"net/url"
	"strings"
)

func CheckDataString(data string) error {
	text := data
	length := len(text)
	for {
		ttext, err := url.QueryUnescape(text)
		if err != nil {
			return err
		}
		tlength := len(ttext)
		if tlength == length {
			break
		}
		text, length = ttext, tlength
	}
	text = strings.ToUpper(text)

	for _, keyword := range keywords {
		if strings.Contains(text, keyword) {
			return fmt.Errorf("are you hacker? %s", keyword)
		}
	}
	return nil
}

func CheckData(data []byte) error {
	return CheckDataString(string(data))
}
