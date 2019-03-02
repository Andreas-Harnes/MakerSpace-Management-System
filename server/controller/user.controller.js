const bcrypt = require('bcrypt');
const UserService = require('../service/user.service');

const saltLength = 12;

module.exports = {
    signUp: async (req, res, next) => {
        if (await UserService.emailUsed(req.body.email)) {
            return res.status(403).json({ error: 'Email already used' });
        }

        await bcrypt.hash(req.body.password, saltLength, async (error, hash) => {
            if (error) {
                return res(500).json({ error: 'Internal error' });
            }

            const user = await UserService.create(req.body.email, hash);
            req.login(user.dataValues.id, (err) => {
                if (err) {
                    next(err);
                }

                return res.redirect('/');
            });
        });
    }
};
