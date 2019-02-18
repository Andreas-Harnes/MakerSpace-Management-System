const express = require('express');
const RouteUtils = require('../utils/route');
const UsersController = require('../controller/user.controller');

const router = express.Router();

router.post('/signup', RouteUtils.validateAuth, UsersController.signUp);
router.post('/signin', RouteUtils.validateAuth, UsersController.signIn);

module.exports = router;
