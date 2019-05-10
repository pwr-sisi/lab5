var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var api = express.Router();

api.use("/user/:id", function(req,res,next){
  var userId = parseInt(req.params.id, 10);
  if(userId < 1) {
    console.log(userId);
    res.status(404).send("User not found!");
  } else {
    next();
  }
});

api.get("/user/:id", function(req, res){
  var userId = parseInt(req.params.id, 10);
  res.status(200);
  res.json({"userId":userId,"status":"existing"});
});
  
api.delete("/user/:id", function(req,res){
  var userId = parseInt(req.params.id, 10);
  res.status(200);
  res.json({"userId":userId,"status":"deleted"});
});

api.post("/user/:id", jsonParser, function(req,res){
  var userId = parseInt(req.params.id, 10);
  var name = req.body.name;
  res.status(200);
  res.json({"userId":userId,"status":"created","name":name});
});

api.put("/user/:id", jsonParser, function(req,res){
  var userId = parseInt(req.params.id, 10);
  var name = req.body.name;
  console.log("Updated user: " + name);
  res.status(200);
  res.json({"userId":userId,"status":"updated","newName": name});
});

module.exports = api;
