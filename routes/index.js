var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/test', function(req, res) {
    var driver = require('./../modules/driver');

    driver.foo(function(err, result) {
        res.send(result + '<br><br><a href=\'/test\'>reload</a><br><a href=\'/changefoo\'>changefoo</a><br><a href=\'/\'>main</a>');
    });
});

router.get('/changefoo', function(req, res) {
    var driver = require('./../modules/driver');

    driver.changeFoo(function(err, result) {
        res.send(result  + '<br><br><a href=\'/test\'>test</a><br><a href=\'/changefoo\'>changefoo</a><br><a href=\'/\'>main</a>');
    });
});

module.exports = router;
