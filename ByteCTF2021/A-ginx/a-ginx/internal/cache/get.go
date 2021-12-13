package cache

import (
	"bytectf2021/aginx/configs"
	"io/ioutil"
	"os"
	"path"
)

func GetCache(uri string) (data []byte, key string, err error) {
	key = MakeKey(uri)
	filename := path.Join(configs.CACHE_ROOT, key)
	f, err := os.Open(filename)
	if err != nil {
		return nil, "", err
	}
	defer f.Close()
	data, err = ioutil.ReadAll(f)
	return
}
