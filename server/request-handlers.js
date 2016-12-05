var utils = require('./utils.js');
var db = require('../db/dbConfig.js');
var photoModule = require('../db/photo.js');

var Photo = photoModule.photo;

var photoActions = {
  'GET': function(req, res) {
    Photo.find(function(err, photos) {
      if (err) {
        console.log(err);
      } else {
        utils.sendResponse(res, 200, JSON.stringify(photos), 'application/json');
      }
    });
  },
  'PUT': function(req, res) {
    utils.collectData(req, function(data) {
      Photo.findByIdAndUpdate(data.photo._id, {rating: data.rating}, function(err, photo) {
        if (err) {
          console.log(err);
        }
        utils.sendResponse(res, 201, JSON.stringify('rating updated'), 'text/html');
      });   
    });
  },
  'POST': function(req, res) {
    utils.collectData(req, function(data) {
      var newPhoto = new Photo({title: data.title, url: data.url, rating: '5'});
      newPhoto.save(function(err, photo) {
        if (err) {
          console.log(err);
        } else {
          utils.sendResponse(res, 201, JSON.stringify('photo posted'), 'text/html');
        }
      });
    });
  }
};




module.exports.photoActions = photoActions;