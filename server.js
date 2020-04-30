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
  content: '<p class="description">In my hometown, this is where I had my first job. The owner opened it when he was 19, and it\'s since become one of the top ranked coffee shops in the area. They were the first to introduce latte art and the artisan coffee shop experience.</p>',
  image: '/img/lochcoffee.jpg',
  drink: '<p>Lavender Vanilla Latte with Hash Slinging Slasher Waffle</p>',
  website: '<a href="https://thelochcoffee.co/" alt="Loch\'s Website">The Loch Coffee Co Website<a>'
})
createArticle({
  title: 'Strange Matter Coffee',
  content: '<p class="description">Located in Lansing, my friends and I used to go here almost once a week to get their coffee and one of their specialty donuts. There was always an argument on whether it was spelled doughnut or donut. Either way, they have flavors like Smores, Berries and Cream, and more in donut form.</p>',
  image: '/img/donuts.png',
  drink: '<p>Iced Vanilla Latte with Berries & Cream Donut</p>',
  website: '<a href="https://strangemattercoffee.com/" alt="Strange Matter\'s Website">Strange Matter Website</a>'
})
createArticle({
  title: 'Madcap Coffee',
  content: '<p class="description">When I spent a summer living in downtown Detroit, this was my favorite coffee shop to go to. Madcap coffee also had the artisan coffee shop experience, but what was unique was that they had a garage door like bar window that opened up to the outside.So they had an indoor seating area, and a bar people on the streets could walk up to and order coffee from. They have another location in Grand Rapids which I also visit when I see my oldest brother who lives in the city.</p>',
  image: '/img/madcap-detroit.jpg',
  drink: '<p>Cold Brew Coffee with Chocolate Croissant</p>',
  website: '<a href="https://madcapcoffee.com/" alt="Madcap\'s Website">Madcap Coffee Website</a>'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/loch', function (request, response) {
  response.render('pages/coffee-shop', {
    shop: articles[0]
  })
})

app.get('/strange', function (request, response) {
  response.render('pages/strange', {
    shop: articles[1]
  })
})

app.get('/madcap', function (request, response) {
  response.render('pages/madcap', {
    shop: articles[2]
  })
})

app.listen(port)
