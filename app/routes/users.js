'use strict';

/*
 * Routes for handling user sign up and authentication.
 */

var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');
var passport = require('passport');

/* Render user signin page */
router.get('/signin', function(req, res) {
    res.render('signin', { pagetitle: 'Sign-in' });
});

/* Render the signup page */
router.get('/signup', function(request, response) {
    response.render('signup', { pagetitle: 'Sign-up' });
});

/* Route to create a new user account */
router.post('/', UserController.create_account);

/* Route to sign a user in */
router.post('/signin', UserController.signin);

/* Route to get a list of all users */
router.get('/', UserController.list_users);

module.exports = router;
