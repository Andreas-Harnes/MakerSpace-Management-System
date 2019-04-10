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
            let entries = [];
            for (let i = 0; i < cumulativeItems.length; i++) {
                entries[i] = cumulativeItems[i].id;
            }

            db.SpecificItems.findAll({
                where: {
                    cumulativeItemsId: entries
                }
            })
                .then(specificItems => {
                    for (let i = 0; i < cumulativeItems.length; i++) {
                        cumulativeItems[i].dataValues.items = 0;
                        cumulativeItems[i].dataValues.availableItems = 0;
                    }
                    
                    for (let i = 0; i < specificItems.length; i++) {
                        for (let j = 0; j < cumulativeItems.length; j++) {
                            if (cumulativeItems[j].dataValues.id === specificItems[i].dataValues.cumulativeItemsId) {
                                cumulativeItems[j].dataValues.items++;
                                if (specificItems[i].dataValues.status) {
                                    cumulativeItems[j].dataValues.availableItems++;
                                }

                                break;
                            }
                        }
                    }

                    return res.json({ cumulativeItems });
                })
                .catch(error => {
                    return next(error);
                });
        })
        .catch(error => {
            return next(error);
        });
});

module.exports = router;
