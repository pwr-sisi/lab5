//Załadowanie potrzebnych modułów
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// Utworzenie aplikacji modułu express
var app = express();

app.use(morgan('short'));

var staticPath = path.join(__dirname, 'static');
app.use("/static", express.static(staticPath));

app.get("/user/:id/picture", function(req, res, next){
  var userId = parseInt(req.params.id, 10);
  res.status(200);
  res.contentType('text/plain');
  res.send('You reqested picture of user #' + userId);
});

app.get("/user/:id", function(req, res, next){
  var userId = parseInt(req.params.id, 10);
  if(userId < 1) {
    next();
    return;
  }
  res.status(200);
  res.contentType('text/plain');
  res.send('You reqested user #' + userId);
});

app.use(function(req,res){
  res.status(404);
  res.send("File not found!");
})

var server = app.listen(3000, function () {
  console.log("Server running at port: %s", server.address().port);
});