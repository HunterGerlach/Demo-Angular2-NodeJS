var express = require('express');
var router  = express.Router();
var bcrypt  = require('bcryptjs');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    user.save(function(err, result) {
        if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'User created',
                obj: result
            });
    });
});

module.exports = router;
