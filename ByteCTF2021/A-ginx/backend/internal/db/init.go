package db

import (
	"bytectf2021/little_article/configs"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB, _ = Init()

func Init() (db *gorm.DB, err error) {
	db, err = gorm.Open(mysql.Open(configs.DB_DSN), &gorm.Config{})
	// db = db.Debug()
	return
}
