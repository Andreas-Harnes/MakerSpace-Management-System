const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(201).send("New user request received - no user registered though!");
});

module.exports = router;
