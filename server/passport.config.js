const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UserService = require('./service/user.service');

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    await UserService.findByEmail(email, async (error, user) => {
        if (error) {
            return done(error);
        } else if (!user) {
            return done(null, false);
        }

        await bcrypt.compare(password, user.dataValues.password, async (error, result) => {
            if (error) {
                return done(error);
            } else if (result) {
                return done(null, user.dataValues.id);
            }
    
            return done(null, false);
        });
    });
}));

passport.serializeUser((userId, done) => {
    done(null, userId);
});

passport.deserializeUser(async (userId, done) => {
    await UserService.findById(userId, (error, user) => {
        done(error, user);
    });
});

module.exports = passport;
