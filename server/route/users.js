const express = require('express');
const passportConfig = require('../passport.config');
const RouteUtils = require('../utils/route');
const UsersController = require('../controller/user.controller');

const router = express.Router();

router.post('/signup', RouteUtils.validateRegistration, UsersController.signUp);
router.post('/signin', passportConfig.authenticate('local'), (req, res) => {
    return res.status(200).send('OK!');
});

module.exports = router;
