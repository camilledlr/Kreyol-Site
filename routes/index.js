var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {stylesheets: ["home"]});
});

router.get('/epizot', function(req, res, next) {
  res.render('contribution', {stylesheets: ["contribution"]});
});

router.get('/jwennnou', function(req, res, next) {
  res.render('contact', {stylesheets: ["contact"]});
});


// router.get('/chantier', function(req, res, next) {
//   res.render('chantier', {stylesheet: ["admin"]});
// });


module.exports = router;
