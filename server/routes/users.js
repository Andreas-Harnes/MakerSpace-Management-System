const express = require('express');
const UsersController = require('../controllers/users');
const RouteUtils = require('../utils/route');

const router = express.Router();

router.post('/signup', RouteUtils.validateAuth, UsersController.signUp);
router.post('/signin', RouteUtils.validateAuth, UsersController.signIn);

module.exports = router;
