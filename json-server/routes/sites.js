var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var AWS = require('aws-sdk');

router.get('/', function (req, res, next) {
  // Create an S3 client
  var s3 = new AWS.S3();
  const params = {
    Bucket: 'project-axe-tool-test-bucket-json-results',
    Delimiter: '/',
  };
  s3.listObjectsV2(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      res.status(500);
    }
    // an error occurred
    else {
      if (data.CommonPrefixes) {
        const prefixes = data.CommonPrefixes.map((prefix) => ({
          prefix: prefix.Prefix.slice(0, -1),
        }));

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200);
        res.json({ prefixes: prefixes });
      }
    }
  });
});

// TODO: This should come from the AWS api and cached in our Store.
router.get('/:siteName', function (req, res, next) {
  // Create an S3 client
  var s3 = new AWS.S3();
  const params = {
    Bucket: 'project-axe-tool-test-bucket-json-results',
    Delimiter: '/',
    Prefix: `${req.params.siteName}/`,
  };
  s3.listObjectsV2(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      res.status(500);
    }
    // an error occurred
    else {
      if (data.CommonPrefixes) {
        const siteFolderList = data.CommonPrefixes.map((prefix) => {
          // Remove the sitename
          const folderName = prefix.Prefix.replace(req.params.siteName, '');

          // Remove the trailing slash
          return {
            prefix: folderName.slice(0, -1),
          };
        });

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200);
        res.json({ siteFolders: siteFolderList });
      }
    }
  });
});

module.exports = router;
