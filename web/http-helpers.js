var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpreq = require('http-request');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, statusCode, asset, callback) {
  // Write some code here that helps serve up your static files! - archived sites, public
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  // access asset on file system - buffering
  // set res code
    // if file not found 404
    // if found 200, 201
  fs.readFile(asset, 'utf8', function(err, data) {
    if (err) console.log(err);
    res.writeHead(statusCode, headers);
    // console.log(data);
    callback(data);
  });
  // invoke callback with data
};

exports.collectData = function(req, cb) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    cb(body.slice(4));
  });
};

exports.writeArchive = function(url) {
  httpreq.get(url, function(err, res) {
    if (err) throw err;
    fs.writeFile(archive.paths.archivedSites + '/' + url, res.buffer.toString(), 'utf8', function(err) {
      if (err) throw err;
    });
  });
};

// As you progress, keep thinking about what helper functions you can put here!




//Send back all the appropriate files in archive
