package db

import "strings"

func FilterQuery(query *map[string]interface{}, allow *[]string) *map[string]interface{} {
	allow_query := make(map[string]interface{})
	for k, v := range *query {
		for _, c := range *allow {
			k = strings.ToLower(k)
			if strings.Contains(k, c) {
				allow_query[k] = v
			}
		}
	}
	return &allow_query
}
