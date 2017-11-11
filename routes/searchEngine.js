var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('searched for: ' + req.query.str);
    // res.render('searchEngine', { title: 'SearchEngine' });

    // enter query from the form:
    //      "localhost:3000/search?str=<something>"
    //      where everything is static besides the <something>
    //      example - localhost:3000/search?str=hello
    //              - localhost:3000/search?str=<script>alert(1)</script>
    // post the query as it is
    res.send(req.query.str);
});

// router.get('/submit', function (req, res, next) {
//
// });

module.exports = router;
