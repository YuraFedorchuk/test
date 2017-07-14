var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/test', function(req, res) {
    var driver = require('./../modules/driver');

    driver.foo(function(err, result) {
        res.send(result);
    });
});

router.get('/changefoo', function(req, res) {
    var driver = require('./../modules/driver');

    driver.changeFoo(function(err, result) {
        res.send(result);
    });
});

module.exports = router;
