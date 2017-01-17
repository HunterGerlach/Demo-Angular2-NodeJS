var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
    res.render('node', {email: doc.email});
});

module.exports = router;
