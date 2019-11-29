var express = require('express');
var path = require('path');
var router = express.Router();

/* GET site list. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res
    .status(200)
    .sendFile('site-list.json', { root: path.join(__dirname, '../public') });
});

module.exports = router;
