var sendResponse = function(res, statusCode, data, type) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', type);
  res.end(JSON.stringify(data)); //need to stringify because we are sending a response
};

var collectData = function(req, callback) {
  var data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    callback(JSON.parse(data)); //need to parse because server will send in JSON
  });
};

module.exports.sendResponse = sendResponse;
module.exports.collectData = collectData;