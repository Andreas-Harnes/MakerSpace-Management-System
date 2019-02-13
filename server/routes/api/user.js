const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.email === null) {
        return res.status(201).send("No email");
    } else if (req.body.password === null) {
        return res.status(201).send("No password");
    }

    res.status(201).send("New user request received - no user registered though!");
});

module.exports = router;
