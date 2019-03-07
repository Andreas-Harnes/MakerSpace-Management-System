const { check, validationResult } = require('express-validator/check');

module.exports.auth = [
    check('email').isEmail(),

    // (?=.*\d)                 at least a digit
    // (?=.*[a-z])              lowercase
    // (?=.*[A-Z])              uppercase
    // .{8,}$/, "i"             at least 8 char

    check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "i"),

    // Can use number as name....
    check('firstName').isLength({min: 2}).trim().escape(),
    
    check('lastName').isLength({min: 2}).trim().escape(),

    check('phone').isNumeric().trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        next();
    }
];
