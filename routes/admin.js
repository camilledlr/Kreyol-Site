var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin', {stylesheets: ["admin"]});
  });
  

module.exports = router;
