var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpH = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var urlExists = false;
  if (req.method === 'GET') {

    if (req.url === '/') { req.url = '/index.html'; }

    // if req.url is in public
    fs.exists(archive.paths.siteAssets + req.url, function(exists) {
      if (exists) {
        urlExists = true;
        httpH.serveAssets(res, 200, archive.paths.siteAssets + req.url, function(data) {
          res.end(data);
        });
      } else {
        archive.isURLArchived(req.url, function(exists) {
          if (exists) {
            httpH.serveAssets(res, 200, archive.paths.archivedSites + req.url, function(data) {
              res.end(data);
            });
          } else {
            res.writeHead(404, httpH.headers);
            res.end();
          }
        });
      }
    });


  }
  else if (req.method === "POST"){

    // get site url from req object
    httpH.collectData(req, function(site){
      console.log(site);
      if(!archive.isUrlInList(site)){
        console.log('site does not exist');
      //call addurltolist
        archive.addUrlToList(site);
      //serve loading html
        httpH.serveAssets(res, 302, archive.paths.siteAssets + '/loading.html', function(data){
          res.end(data);
        });
      }
    });
    //

  }

};




//Gets the input from the server and handles the appropriate request
