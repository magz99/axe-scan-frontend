var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

// TODO: This should come from the AWS api and cached in our Store.
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res
    .status(200)
    .sendFile('site-list.json', { root: path.join(__dirname, '../public') });
});

// TODO: This should come from the AWS api and cached in our Store.
router.get('/:siteName', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // var fPath = path.join(__dirname, '../public/rangle-scan-list.json');
  // var file = fs.readFileSync(fPath, 'utf-8');
  // var jsonFile = JSON.parse(file);
  if (req.params.siteName === 'rangle.io') {
    res.status(200).sendFile('rangle-scan-list.json', {
      root: path.join(__dirname, '../public'),
    });
  }
  // var jsonRes = {};
  // jsonRes.scans = jsonFile.CommonPrefixes;
  // res.status(200);
  // res.json(jsonRes);
});

module.exports = router;
