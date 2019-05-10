//Załadowanie potrzebnych modułów
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// Utworzenie aplikacji modułu express
var app = express();

app.use(morgan('short'));

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use(function(req,res){
  res.status(404);
  res.send("File not found!");
})

var server = app.listen(3000, function () {
  console.log("Server running at port: %s", server.address().port);
});