//Załadowanie potrzebnych modułów
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var apiModule = require('./routes/api_module')


// Utworzenie aplikacji modułu express
var app = express();

app.use(morgan('short'));

var staticPath = path.join(__dirname, 'static');
app.use("/static", express.static(staticPath));

app.use("/user", apiModule);

app.use(function(req,res){
  res.status(404);
  res.send("File not found!");
})

var server = app.listen(3000, function () {
  console.log("Server running at port: %s", server.address().port);
});