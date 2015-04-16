var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpH = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {

    // if req.url is something in 'public' or 'sites'
      // httpH.serveAssets(res, req.url, cb)
    if (req.url === '/') { req.url = '/index.html'; }


    var asset = archive.paths.siteAssets + req.url; // ??? can we send entire folder?
    httpH.serveAssets(res, asset, function(data) {
      console.log('serve asset', asset);
      console.log(data);
      res.end(data);
    });
  }
  // if GET, pull from archives
  //call serveAssets(res, asset, cb)

  // if GET for nonexistent file, return 404

  // should append submitted sites to sites.txt
  // if method is POST and url is /, {url: url}
    // add url to sites.txt
    // set response code to 302
    //
  // res.end(archive.paths.list);
};




//Gets the input from the server and handles the appropriate request
