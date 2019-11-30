var express = require('express');
var path = require('path');
var router = express.Router();

// TODO: This hsould come from the AWS api and cached in our Store.
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res
    .status(200)
    .sendFile('site-list.json', { root: path.join(__dirname, '../public') });
});

// TODO: This should come from the AWS api and cached in our Store.
router.get('/rangle.io', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).sendFile('rangle-scan-list.json', {
    root: path.join(__dirname, '../public'),
  });
});

module.exports = router;
