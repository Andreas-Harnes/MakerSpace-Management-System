const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passport');
const db = require('./models');
const env = require('./env');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const port = process.env.PORT || 3000;

const app = express();
const sequelize = new Sequelize(
    env.sqlitedb.database,
    env.sqlitedb.username,
    env.sqlitedb.password, {
        "dialect": env.sqlitedb.dialect,
        "storage": env.sqlitedb.storage,
        logging: false
    }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    name: 'mms_sid',
    resave: false,
    saveUninitialized: false,
    secret: env.cookie.secret,
    store: new SequelizeStore({ db: sequelize })
}));

app.use(passport.initialize());
app.use(passport.session());

db.sequelize.sync({ force: true })
    .then(() => {
        console.log('MariaDB synced successfully');
    })
    .catch(error => {
        console.log('MariaDB syncing error:');
        console.log(error);
    });

sequelize.sync()
    .then(() => {
        console.log('SQLite synced successfully');
    })
    .catch(error => {
        console.log('SQLite syncing error:');
        console.log(error);
    });


app.use('/users', require('./routes/users-route'));
app.use('/cumulativeitems', require('./routes/cumulative-items-route'));

app.use(express.static('public'));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send({ error: 'Internal server error' })
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));