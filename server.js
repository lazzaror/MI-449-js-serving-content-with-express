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
  content: 'In my hometown, this is where I had my first job. The owner opened it when he was 19 and it\'s since become one of the top ranked coffee shops in the area. They were the first to introduce latte art and the artisan coffee shop experience.'
})
createArticle({
  title: 'Strange Matter Coffee',
  content: 'Located in Lansing, my friends and I used to go here almost once a week to get their coffee and one of their specialty donuts. There was always an argument on whether it was spelled doughnut or donut. Either way, they have flavors like Smores, Berries and Cream, and more in donut form.'
})
createArticle({
  title: 'Madcap Coffee',
  content: 'When I spent a summer living in downtown Detroit, this was my favorite coffee shop to go to, they also had the artisan coffee shop experience, but what was unique was that they had a garage door like bar window that opened up to the outside. So they had an indoor seating area, and a bar people on the streets could walk up to and order coffee from.'
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
