const express = require('express');
const passport = require('../passport');
const RouteUtils = require('../utils/route');
const UsersController = require('../controller/user.controller');

const router = express.Router();

router.post('/signup', RouteUtils.validateAuth, UsersController.signUp);
router.post('/signin', passport.authenticate('local', {
    successRedirect: '/'
}));

module.exports = router;
