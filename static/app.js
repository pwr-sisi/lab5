//Załadowanie potrzebnych modułów
var express = require('express');
var path = require('path');
var fs = require('fs');

// Utworzenie aplikacji modułu express
var app = express();

app.use(function (req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
})

app.use(function (req, res, next) {
  var filePath = path.join(__dirname, 'static', req.url);
  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
})

app.use(function (req, res) {
  res.status(404);
  res.send("File not found!");
})

var server = app.listen(3000, function () {
  console.log("Server running at port: %s", server.address().port);
});