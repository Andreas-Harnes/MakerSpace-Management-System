const bcrypt = require('bcrypt');
const UserService = require('../service/user.service');

const saltLength = 12;

module.exports = {
    signUp: async (req, res, next) => {
        await UserService.emailUsed(req.body.email, (error, user) => {
            if (error) {
                return next(error);
            } else if (user) {
                return res.status(403).json({ error: 'Email already used' });
            }
        });

        await bcrypt.hash(req.body.password, saltLength, async (error, hash) => {
            if (error) {
                return next(error);
            }

            await UserService.create(req.body.email, hash, (error, user) => {
                if (error) {
                    return next(error);
                }

                req.login(user.dataValues.id, (error) => {
                    if (error) {
                        return next(error);
                    }

                    return res.status(201).send({ msg: 'Authentication successful' });
                });
            });
        });
    }
};
