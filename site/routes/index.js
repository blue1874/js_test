var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index-1', function(req, res, next) {
  res.render('index-1', { title: 'site' });
})
module.exports = router;
