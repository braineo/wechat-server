var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/answers', function (req, res, next) {
  res.send(JSON.stringify(answerdb));
});


module.exports = router;
