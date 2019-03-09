const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res, next) => {
    db.CumulativeItems.findAll()
        .then(cumulativeItems => {
            return res.json({ cumulativeItems });
        })
        .catch(error => {
            return next(error);
        });
});

module.exports = router;
