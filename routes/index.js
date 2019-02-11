var express = require('express');
var myRoute = express.Router();
var db = require('../models');

myRoute.get('/display', function(req, res) {
  db.find()
  .then(function(data){
    res.send(data)
  })

})

myRoute.delete('/delete', function(req, res) {
  db.remove(req.body)
  .then(function(data){
    res.send(data)
  })

})

myRoute.delete('/deleteAll', function(req, res) {
  db.remove()
  .then(function(data){
    res.send(data)
  })

})

myRoute.put('/update', function(req, res) {
  let idToUpdate = {};
   idToUpdate._id = req.body._id;

  let updateCheck = {};
  updateCheck.check = req.body.check;

  db.update(idToUpdate, {$set:updateCheck}, {multi:true})
  .then(function(data){
    res.send(data)
  })

})

myRoute.post('/add', function(req, res) {
  var task = req.body;
  db.create(task)
  .then(function(data){
    res.send(data)
  })

})

module.exports = myRoute;
