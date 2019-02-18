const UserService = require('../service/user.service');
const TokenUtils = require('../utils/token');

module.exports = {
    signUp: async (req, res) => {
        // TODO Error handling. Also see UserService.emailUsed()
        // TODO Locks?
        if (await UserService.emailUsed(req.body.email)) {
            return res.status(403).json({ error: 'Email already used.' });
        }

        const token = TokenUtils.sign(await UserService.create(req.body.email, req.body.password));
        res.status(201).json({ token });
    },

    signIn: async (req, res) => {
        res.status(200).send('TODO');
    }
};
