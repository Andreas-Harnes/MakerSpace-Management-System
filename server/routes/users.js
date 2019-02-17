const express = require('express');
const { check } = require('express-validator/check');
const UsersController = require('../controllers/users');

const router = express.Router();

router.post('/signup', [check('email').isEmail(), check('password').isLength({ min: 8})], UsersController.signUp);

module.exports = router;
