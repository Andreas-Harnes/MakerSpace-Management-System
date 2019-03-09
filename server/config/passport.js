const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.use(new LocalStrategy({ usernameField: 'email' },
    (email, password, done) => {
        db.User.findOne({ where: { email } })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect email or password' });
                } else if (!user.validPassword(password, user.password)) {
                    return done(null, false, { message: 'Incorrect email or password' });
                } else {
                    return done(null, user);
                }
            })
            .catch(error => {
                return done(error);
            });
    }
));

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.User.findByPk(id)
        .then(user => {
            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        })
        .catch(error => {
            return done(error);
        });
});

module.exports = passport;
