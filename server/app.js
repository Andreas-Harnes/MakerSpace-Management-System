const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config.js');
const path = require('path');
const port = 3000;

// TODO Refactor start
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
const UserService = require('./service/user.service');
const env = require('./config/env');

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = env.jwt.secret;

const strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    console.log('Payload received', jwt_payload);
    const user = await UserService.findById(jwt_payload.sub);

    if (user) {
        console.log("Id ok ...");
        next(null, user);
    } else {
        console.log("Id NOT ok ...")
        next(null, false);
    }
});
  
passport.use(strategy);
// TODO Refactor stop

db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced ...');
});

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/users', require('./route/users'));
app.use('/cumulativeitems', require('./route/cumulativeitems'));
app.use('/secrets', require('./route/secrets'));

app.use(express.static(path.join(__dirname, 'public')));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
