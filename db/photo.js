var mongoose = require('mongoose');
var db = require('./dbConfig.js');

var photoSchema = mongoose.Schema({
  title: String,
  url: String,
  rating: Number
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports.photo = Photo;