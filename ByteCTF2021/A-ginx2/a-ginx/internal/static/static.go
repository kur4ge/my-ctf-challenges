package static

import (
	"bytectf2021/aginx/configs"
	"io/ioutil"
	"os"
	path_ "path"
	"regexp"
)

func CheckStaticPath(path string) bool {
	for _, rPath := range configs.STATIC_PATHS {
		reg := regexp.MustCompile(rPath)
		if reg == nil {
			continue
		}
		if reg.MatchString(path) {
			return true
		}
	}
	return false
}

func GetStatic(path string) (data []byte, filename string, err error) {
	filename = path_.Join(configs.ROOT, path)
	stat, err := os.Stat(filename)
	if err == nil && stat.IsDir() {
		filename = path_.Join(filename, configs.INDEX)
	}
	f, err := os.Open(filename)
	if err != nil {
		return nil, "", err
	}
	defer f.Close()
	data, err = ioutil.ReadAll(f)
	return
}
