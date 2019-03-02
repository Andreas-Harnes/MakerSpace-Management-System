const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UserService = require('./service/user.service');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await UserService.findByEmail(email);
    if (!user) {
        return done(null, false);
    }

    await bcrypt.compare(password, user.dataValues.password, async (error, result) => {
        if (error) {
            return done(error);
        }

        if (result) {
            return done(null, user.dataValues.id);
        }

        return done(null, false);
    });
}));

passport.serializeUser((userId, done) => {
    console.log('Serialized ...');
    done(null, userId);
});

passport.deserializeUser(async (userId, done) => {
    await UserService.findById(userId, (err, user) => {
        console.log('Deserialized ...');
        done(err, userId);
    });
});

module.exports = passport;
