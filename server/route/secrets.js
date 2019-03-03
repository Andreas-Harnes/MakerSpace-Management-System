const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('local', { session: false }), (req, res) => {
    res.json({ msg: 'Authenticated successfully!' });
});

module.exports = router;
