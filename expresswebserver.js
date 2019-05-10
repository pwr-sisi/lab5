//Załadowanie modułu express
var express = require('express');

// Utworzenie aplikacji modułu express
var app = express();

// Dodanie trasy (route) i odpowiadającej jej funkcji obsługi
app.get('/', function (req, res) {
  res.status(200);
  res.type('text/plain')
  res.send('Hello World');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
   
  console.log("Server running at http://%s:%s", host, port);
});