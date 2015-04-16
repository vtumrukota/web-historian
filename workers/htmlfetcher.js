// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = require('../helpers/archive-helpers.js');
var CronJob = require('cron').CronJob;

var job = new CronJob({
  cronTime: '00 * * * * *',
  onTick: archive.downloadUrls,
  start: true,
  timeZone: 'America/Los_Angeles'
});

