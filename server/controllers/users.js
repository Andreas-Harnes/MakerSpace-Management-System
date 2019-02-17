const TokenUtils = require('../utils/token');
const UserService = require('../services/user');

module.exports = {
    signUp: async (req, res) => {
        if (await UserService.emailInUse(req.body.email)) {
            return res.status(403).json({ error: 'Email already used.' });
        }

        const token = TokenUtils.sign(await UserService.addUser(req.body.email, req.body.password));
        res.status(201).json({ token });
    }
};
