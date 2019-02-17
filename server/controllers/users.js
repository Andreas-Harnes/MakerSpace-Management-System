const UserService = require('../db/UserService');

const { validationResult } = require('express-validator/check');
module.exports = {
    signUp: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const email = req.body.email;
        const password = req.body.password;

        const emailRegistered = await UserService.emailRegistered(email);
        if (emailRegistered) {
            return res.status(403).json({ error: 'Email is already in use.'});
        }

        await UserService.addUser(email, password);

        // TODO Generate ID and send to user.
        res.status(201).send("New user created!");
    }
};
