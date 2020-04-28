var express = require('express')
var app = express()
var port = process.env.PORT || 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))

var articles = {}

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

createArticle({
  title: 'Loch Coffee Company',
  content: 'Midland, MI coffee shop where I had my first job as a barista'
})
createArticle({
  title: 'Strange Matter Coffee',
  content: 'East Lansing, MI coffee shop where I\'ve metaphorically lived with my friends eating their gourmet donuts'
})
createArticle({
  title: 'Madcap Coffee',
  content: 'Detroit, MI coffee shop where I spent a lot of time when I lived in Detroit for the summer'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/loch', function (request, response) {
  response.render('pages/loch', {
    articles: articles
  })
})

app.get('/strange', function (request, response) {
  response.render('pages/strange', {
    articles: articles
  })
})

app.get('/madcap', function (request, response) {
  response.render('pages/madcap', {
    articles: articles
  })
})

app.listen(port)
