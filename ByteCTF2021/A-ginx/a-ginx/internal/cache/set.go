package cache

import (
	"bytectf2021/aginx/configs"
	"os"
	"path"
)

func SetCache(uri string, data []byte) (err error) {
	filename := path.Join(configs.CACHE_ROOT, MakeKey(uri))
	os.MkdirAll(path.Dir(filename), 0777)
	f, err := os.Create(filename)
	if err != nil {
		return err
	}
	defer f.Close()
	_, err = f.Write(data)
	return err
}
