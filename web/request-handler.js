var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpH = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {

    if (req.url === '/') { req.url = '/index.html'; }

    // if req.url is in public
    fs.exists(archive.paths.siteAssets + req.url, function(exists) {
      if (exists) {
        httpH.serveAssets(res, archive.paths.siteAssets + req.url, function(data) {
          console.log(req.url);
          res.end(data);
        });
      }
    });

    // if req.url is in sites
    archive.isURLArchived(req.url, function() {
      httpH.serveAssets(res, archive.paths.archivedSites + req.url, function(data) {
        res.end(data);
      });
    });


    // invoke isURLArchived(req.url) to check if it is in sites
      // serve
    //

    // if req.url is something in 'public' or 'sites'
      // httpH.serveAssets(res, req.url, cb)
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
