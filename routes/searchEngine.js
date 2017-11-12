var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    // when parameter was passed through the url, return it as it is
    if (Object.keys(req.query).length !== 0){
        res.send('You Searched For: ' + req.query.str);
    }
    res.render('searchEngine', {title: 'Reflected XSS'});
});


module.exports = router;
