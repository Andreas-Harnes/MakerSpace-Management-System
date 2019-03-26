const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/:userid/name',  (req, res, next) => {
    db.User.findOne({ where: { id: req.params.userid } })
        .then(user => {
            if (!user) {
                // TODO Error handling
                return next();
            }
            
            // TODO Add user input validation
            let firstNameChanged = false;
            if (req.body.firstName) {
                user.set("firstName", req.body.firstName);
                firstNameChanged = true;
            }

            let lastNameChanged = false;
            if (req.body.lastName) {
                user.set("lastName", req.body.lastName);
                lastNameChanged = true;
            }
            
            if (firstNameChanged && lastNameChanged) {
                user.save();
                req.user.firstName = req.body.firstName;
                req.user.lastName = req.body.lastName;
            } else if (firstNameChanged) {
                user.save();
                req.user.firstName = req.body.firstName;
            } else if (lastNameChanged) {
                user.save();
                req.user.lastName = req.body.lastName;
            }

            return res.json({ firstName: req.user.firstName, lastName: req.user.lastName });
        })
        .catch(error => {
            return next(error);
        });
});

module.exports = router;