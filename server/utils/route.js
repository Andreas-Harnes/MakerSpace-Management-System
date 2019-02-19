const { check, validationResult } = require('express-validator/check');

module.exports.validateAuth = [
    check('email').isEmail(),

    // (?=.*\d)                 at least a digit
    // (?=.*[a-z])              lowercase
    // (?=.*[A-Z])              uppercase
    // (?=.*[^a-zA-Z0-9])       ?
    // .{8,}$/, "i"             at least 8 char(?)
    check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        next();
    }
];
