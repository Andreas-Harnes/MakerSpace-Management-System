const express = require('express');
const db = require('../models');

const router = express.Router();

const MAX_ITEMS_PER_PAGE = 25;

router.get('/', (req, res, next) => {
    db.CumulativeItems.findAll({ limit: MAX_ITEMS_PER_PAGE })
        .then(cumulativeItems => {
            return res.json({ cumulativeItems });
        })
        .catch(error => {
            return next(error);
        });
});

module.exports = router;
