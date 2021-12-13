import axios from 'axios'
var token = null
const host = '/v'
// const host = 'http://10.227.67.204:9080/v'

const setToken = (t) => {
    // localStorage.setItem("token", t)
    token = t
}

const parseToken = () => {
    // let token = localStorage.getItem("token")
    return `Bearer ${token}`
}
// 根据id获取某个作文内容HTML
const fetchArticleHTML = id => {
    return axios.get(`${host}/articles/${id}/html`)
}

// 根据id或title获取某个作文详细信息
const fetchArticle = s => {
    return axios.get(`${host}/articles/${s}`, {
        headers: {
            'Authorization': parseToken(),
        },
    })
}
// 查找作文
const queryArticles = (params) => {
    return axios.get(`${host}/articles`, {
        params: params,
        headers: {
            'Authorization': parseToken()
        }
    })
}
// 获取所有tags
const fetchTags = () => {
    return axios.get(`${host}/tags`, {
        headers: {
            'Authorization': parseToken()
        }
    })
}
// 获取所有tags
const login = (json) => {
    return axios({
        method: "post",
        headers: {
            'Content-type': 'application/json'
        },
        url: `${host}/login`,
        data: json
    })
}

const register = (json) => {
    return axios({
        method: "post",
        headers: {
            'Content-type': 'application/json'
        },
        url: `${host}/register`,
        data: json
    })
}

const getCacheUser = () => {
    // let token = localStorage.getItem('token')
    if (token) {
        let user = JSON.parse(atob(token.split('.')[1]))
        if (user.exp > (new Date().getTime() / 1000)) {
            return user
        }
    }
    return { exp: 0, username: 'guest' }
}

const previewArticle = (title, content) => {
    let form = document.createElement("form")
    form.action = `${host}/articles/preview`
    form.method = "POST"
    form.target = "_blank"
    let input = document.createElement("input")
    input.value = title
    input.name = 'title'
    input.hidden = true
    form.appendChild(input)

    let text = document.createElement("textarea")
    text.innerText = content
    text.name = 'content'
    text.hidden = true

    form.appendChild(text)
    document.body.appendChild(form);
    form.submit()
    form.remove()
}

const newArticle = (json) => {
    return axios.post(`${host}/articles`, json, {
        headers: {
            'Authorization': parseToken()
        },
    })
}

export {
    fetchArticleHTML, queryArticles, previewArticle, newArticle, fetchArticle, fetchTags, login, register, getCacheUser, setToken
}
