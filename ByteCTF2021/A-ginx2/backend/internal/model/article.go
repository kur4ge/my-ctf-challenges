package model

type Article struct {
	ID             string `sql:"type:uuid;primary_key;default:uuid_generate_v4()"`
	Title          string
	Author         string
	HtmlContent    string
	PlainContent   string
	SubmissionTime int64
	IsPublic       bool
}

type ArticleItemIndex struct {
	ID             string `json:"_id"`
	Title          string `json:"title"`
	Author         string `json:"author"`
	PlainContent   string `json:"plainContent"`
	SubmissionTime int64  `json:"submissionTime"`
	Tags           string `json:"tags"`
}

type ArticleItemDetail struct {
	ID             string `json:"_id"`
	Title          string `json:"title"`
	Author         string `json:"author"`
	HtmlContent    string `json:"htmlContent"`
	SubmissionTime int64  `json:"submissionTime"`
	Tags           string `json:"tags"`
}

// HtmlContent    string

type JSONArticle struct {
	Title    string   `json:"title"`
	Content  string   `json:"content"`
	Tags     []string `json:"tags"`
	IsPublic bool     `json:"is_public"`
}
