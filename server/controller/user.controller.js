const bcrypt = require('bcrypt');
const UserService = require('../service/user.service');
const TokenUtils = require('../utils/token');

const saltLength = 12;

module.exports = {
    signUp: async (req, res) => {
        // TODO Error handling. Also see UserService.emailUsed()
        // TODO Locks?
        if (await UserService.emailUsed(req.body.email)) {
            return res.status(403).json({ error: 'Email already used' });
        }

        await bcrypt.hash(req.body.password, saltLength, async (error, hash) => {
            if (error) {
                return res(500).json({ error: 'Internal error' });
            }

            const token = TokenUtils.sign(await UserService.create(req.body.email, hash));
            res.status(201).json({ token });
        });
    },

    signIn: async (req, res) => {
        res.status(200).send('TODO');
    }
};
