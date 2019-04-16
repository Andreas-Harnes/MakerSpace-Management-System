const express = require('express');
const passport = require('../config/passport');
const db = require('../models');
const isAuthenticated = require('../middleware/authentication/is-authenticated');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();

const authenticationValidation = [
    check('email').isEmail(),
    // Length of 8 or more with atleast 1 lowercase letter, 1 uppercase letter and 1 number
    check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
];

const signUpValidation = [
    authenticationValidation[0],
    authenticationValidation[1],
    check('firstName').isLength({min: 2}).trim().escape().matches(/^[a-zA-ZæÆøØåÅ]+$/),
    check('lastName').isLength({min: 2}).trim().escape().matches(/^[a-zA-ZæÆøØåÅ]+$/),
    check('phone').isLength({min: 8}).trim().escape().matches(/^[0-9]+$/),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        next();
    }
];

const signInValidation = [
    authenticationValidation[0],
    authenticationValidation[1],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        next();
    }
];

router.post('/signup', signUpValidation, (req, res, next) => {
    db.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user) {
                return res.status(403).json({ error: 'Email already used' });
            }

            db.User.findOne({ where: { phone: req.body.phone } })
                .then(user => {
                    if (user) {
                        return res.status(403).json({ error: 'Phone already used' });
                    }

                    db.User.create({
                        email: req.body.email,
                        password: req.body.password,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        phone: req.body.phone
                    })
                        .then(user => {
                            req.logIn(user.dataValues, error => {
                                if (error) {
                                    return next(error);
                                }
                                
                                return res.status(201).json({ 'id': user.dataValues.id });
                            });
                        })
                        .catch(error => {
                            return next(error);
                    });
                })
                .catch(error => {
                    return next(error);
                });
        })
        .catch(error => {
            return next(error);
        });
});

router.post('/signin', signInValidation, passport.authenticate('local'), (req, res) => {
    return res.status(200).json({
        id: req.user.dataValues.id,
        email: req.user.dataValues.email,
        firstName: req.user.dataValues.firstName,
        lastName: req.user.dataValues.lastName,
        phone: req.user.dataValues.phone
    });
});

router.get('/signout', isAuthenticated, (req, res, next) => {
    req.logOut();
    req.session.destroy(error => {
        if (error) {
            return next(error);
        }

        return res.clearCookie('mms_sid').status(200).send();
    });
});

module.exports = router;
