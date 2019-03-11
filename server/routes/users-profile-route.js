const express = require('express');

const router = express.Router();

router.post('/:userid/name', (req, res) => {
    res.send('TODO');
});

module.exports = router;