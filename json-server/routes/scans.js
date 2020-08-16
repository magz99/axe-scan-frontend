var express = require('express');
var path = require('path');
var router = express.Router();
var AWS = require('aws-sdk');
const { AWS_SCAN_BUCKET } = require('./shared/common-vars');
const s3 = new AWS.S3();

// Pull the "master json file" by default because this will contain
// A summary of the scans, as well as a mapping of urls -> result json
router.get('/:siteName/:folderName', function (req, res, next) {
  const params = {
    Bucket: AWS_SCAN_BUCKET,
    Key: `${req.params.siteName}/${req.params.folderName}/scan-results.json`,
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      res.status(500);
    } else {
      if (data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200);

        const bodyValueAsString = data.Body.toString(
          'utf-8',
          0,
          data.Body.length
        );
        res.json(JSON.parse(bodyValueAsString));
      }
    }
  });
});

router.get('/:siteName/:folderName/:scanFile', function (req, res, next) {
  const params = {
    Bucket: AWS_SCAN_BUCKET,
    Key: `${req.params.siteName}/${req.params.folderName}/${req.params.scanFile}`,
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      res.status(500);
    } else {
      if (data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200);

        const bodyValueAsString = data.Body.toString(
          'utf-8',
          0,
          data.Body.length
        );
        res.json(JSON.parse(bodyValueAsString));
      }
    }
  });

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.status(200).sendFile(`${req.params.scanFile}`, {
  //   root: path.join(
  //     __dirname,
  //     `../public/sample-scans/${req.params.siteName}/${req.params.folderName}`
  //   ),
  // });
});

module.exports = router;
