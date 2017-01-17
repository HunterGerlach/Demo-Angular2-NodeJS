var express = require('express');
var router  = express.Router();
var User    = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Schwartz',
        password: 'super-secret',
        email: email
    });
    console.log("nothing yet");
    user.save(function(err, result) {
        if(err) {
            console.log("error: ");
            console.log(err);
            res.send(400, 'Bad Request');
        } else {
            console.log("Success!");
            console.log(result);
        }
    });
    res.redirect('/');
})

module.exports = router;
