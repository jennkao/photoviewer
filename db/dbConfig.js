var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('connection open!');
});

module.exports.db = db;