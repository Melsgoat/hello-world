var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/melanie2', function (req, res) {
  res.send('melanies page 2')
})


app.listen(4000, function () {
  console.log('Melanies test on port 4000 ')
})
