const bcrypt = require('bcrypt');
const UserService = require('../service/user.service');
const TokenUtils = require('../utils/token');
// TODO Refactor 
const passport = require('../passport');

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

            const user = await UserService.create(req.body.email, hash);
            // TODO Refactor
            req.login(user.dataValues.id, (err) => {
                res.redirect('/');
            });
        });
    },

    signIn: async (req, res) => {
        // TODO Error handling.
        const user = await UserService.findByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ msg: 'Authentication failed' });
        }

        await bcrypt.compare(req.body.password, user.dataValues.password, async (error, result) => {
            if (error) {
                return res.status(401).json({ msg: 'Authentication failed' });
            }

            if (result) {
                const token = TokenUtils.sign(user.dataValues.id);
                return res.status(200).json({ msg: 'Authentication successful', token });
            }

            return res.status(401).json({ msg: 'Authentication failed' });
        });
    }
};

passport.serializeUser((userId, done) => {
    console.log('Serializing ...');
    done(null, userId);
});

passport.deserializeUser(async (userId, done) => {
    console.log('Deserializing ...');
    done(null, userId);
});