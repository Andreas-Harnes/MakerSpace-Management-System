const passport = require('passport');
const passportJWT = require("passport-jwt");
const env = require('./config/env');
const UserService = require('./service/user.service');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = env.jwt.secret;

const strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    const user = await UserService.findById(jwt_payload.sub);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
  
passport.use(strategy);

module.exports = passport;
