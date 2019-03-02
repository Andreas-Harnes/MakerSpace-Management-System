const { check, validationResult } = require('express-validator/check');

module.exports.validateRegistration = [
    check('email').isEmail(),

    // Atleast 1 digit, 1 lower case character, 1 upper case character with a length of 8 or more.
    check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "i"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        next();
    }
];
