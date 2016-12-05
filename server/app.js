// var http = require('http');
// var url = require('url');

// var reqhandlers = require('./request-handlers.js');
// var utils = require('./utils.js');

// var hostname = '127.0.0.1';
// var port = 3000;

// var router = {
//   '/': reqhandlers.photoActions
// };

// var server = http.createServer(function(req, res) {
//   var path = url.parse(req.url).pathname;
//   console.log('serving request type ' + req.method + ' for ' + path);
//   var requestHandlerObj = router[path];
//   if (path) {
//     requestHandlerObj[req.method](req, res);
//   } else {
//     utils.sendResponse(res, 404, '');
//   }
// });

// server.listen(port, hostname, function() {
//   console.log('server listening at ' + hostname + port);
// });


var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var reqhandlers = require('./request-handlers.js');
// var url = require('url');
var db = require('../db/dbConfig.js');
var photo = require('../db/photo.js');

app.use(morgan('dev'));

app.use('/scripts', express.static(path.join(__dirname + '/../node_modules')));
app.use(express.static('../public'));

app.get('/photos', reqhandlers.photoActions['GET']);
app.put('/photos', reqhandlers.photoActions['PUT']);
app.post('/photos', reqhandlers.photoActions['POST']);

app.listen(3000, function() {
  console.log('Listening at port 3000');
});



