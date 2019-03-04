const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const db = require('./config/db.config.js');
const passportConfig = require('./passport.config');
const env = require('./config/env');
const port = 3000;

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(
    env.sqlitedb.database,
    env.sqlitedb.username,
    env.sqlitedb.password, {
        "dialect": "sqlite",
        "storage": "./session.sqlite"
    }
);

app.use(session({
    name: 'mms.id',
    resave: false,
    saveUninitialized: false,
    secret: env.cookie.secret,
    store: new SequelizeStore({
        db: sequelize
    })
}));

app.use(passportConfig.initialize());
app.use(passportConfig.session());

db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced ...');
});

sequelize.sync();

app.use('/users', require('./route/users'));
app.use('/cumulativeitems', require('./route/cumulativeitems'));
app.use('/secrets', require('./route/secrets'));
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send({ error: 'Internal server error' })
});

app.use(express.static(path.join(__dirname, 'public')));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
