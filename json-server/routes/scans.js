var express = require('express');
var path = require('path');
var router = express.Router();

// TODO: This should come from the AWS api and cached in our Store.
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).sendFile('www.toyota.ca_1.json', {
    root: path.join(__dirname, '../public/sample-scans'),
  });
});
router.get('/:siteName/:folderName', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).sendFile('master.json', {
    root: path.join(
      __dirname,
      `../public/sample-scans/${req.params.siteName}/${req.params.folderName}`
    ),
  });
});
router.get('/:siteName/:folderName/:scanFile', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).sendFile(`${req.params.scanFile}`, {
    root: path.join(
      __dirname,
      `../public/sample-scans/${req.params.siteName}/${req.params.folderName}`
    ),
  });
});

module.exports = router;
