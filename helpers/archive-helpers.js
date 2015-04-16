var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb){
  // read list in sites.txt
  fs.readFile(this.paths.list, 'utf8', function(err, data){
    if(err) throw err;
    cb(data.split("\n"));
  });
};

exports.isUrlInList = function(url){
  // call readListOfUrls to get LIST and check if URL is in LIST
  var inList = false;
  this.readListOfUrls(function(list){
    if(list.indexOf(url) > 0){
      inList = true;
    }
  });
  return inList;
};

exports.addUrlToList = function(url){
  // fs.writeFileSync(archive.paths.list, urlArray.join("\n")); // append sites to sites.txt

};

exports.isURLArchived = function(){
  // check arcives/sites for file
  // reference archivedSites
  // reference path - archived sites or public
};

exports.downloadUrls = function(){
  // file io - data buffer chunk thing
  // write to file ??
};


//
