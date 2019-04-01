var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.render('index.pug')
});

app.get('/userform', function (req, res) {
  res.render('userelogin.pug', {
    name: req.query.first_name,
    lastName: req.query.last_name
  })
})

app.get('/auth/google', function (req, res) {
  res.render('googlelogin.pug')
})

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    'Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port
  );
});