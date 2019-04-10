const express = require('express');
const db = require('../models');

const router = express.Router();

const ITEM_START_POSITION = 0;
const MAX_ITEMS_PER_PAGE = 25;

router.get('/', (req, res, next) => {
    let startPosition = ITEM_START_POSITION;
    if (req.query.start) {
        const regex = /^[0-9]+$/;
        if (regex.test(req.query.start)) {
            startPosition = parseInt(req.query.start);
        }
    }

    db.CumulativeItems.findAll({ 
        limit: MAX_ITEMS_PER_PAGE,
        offset: startPosition
    })
        .then(cumulativeItems => {
            return res.json({ cumulativeItems });
        })
        .catch(error => {
            return next(error);
        });
});

module.exports = router;
