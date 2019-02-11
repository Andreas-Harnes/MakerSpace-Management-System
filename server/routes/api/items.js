const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("GET request for all items received - no items to provide though!");
});

module.exports = router;
