var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/melanie', function (req, res) {
  res.send('melanies page')
})


app.listen(4000, function () {
  console.log('Melanies test on port 4000 ')
})
