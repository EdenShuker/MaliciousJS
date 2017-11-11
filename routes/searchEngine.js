var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('searchEngine', { title: 'SearchEngine' });
});

// router.get('/submit', function (req, res, next) {
//
// })

module.exports = router;
