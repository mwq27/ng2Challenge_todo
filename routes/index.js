var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'ng2 Express Starter' });
});

router.get('/tweetbox', function(req, res, next) {
  res.render('tweetbox.html', { title: 'ng2 Challenge TweetBox' });
});

module.exports = router;
