var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    // enter query from the form:
    //      "localhost:3000/search?str=<something>"
    //      where everything is static besides the <something>
    //      example - localhost:3000/search?str=hello
    //              - localhost:3000/search?str=<script>alert(1)</script>
    // post the query as it is

    // when parameter was passed through the url, return it as it is
    if (Object.keys(req.query).length !== 0){
        res.send('You Searched For: ' + req.query.str);
    }
    res.render('searchEngine', {title: 'Reflected XSS'});
});


module.exports = router;
