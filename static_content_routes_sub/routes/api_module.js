var express = require('express');

var api = express.Router();

api.get("/:id", function(req, res, next){
  var userId = parseInt(req.params.id, 10);
  if(userId < 1) {
    next();
    return;
  }
  res.status(200);
  res.contentType('text/plain');
  res.send('You reqested user #' + userId + " Your IP: " + req.ip);
});
  
module.exports = api;
