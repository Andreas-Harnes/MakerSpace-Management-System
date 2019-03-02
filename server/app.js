const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config.js');
const passport = require('./passport');
const path = require('path');
const port = 3000;

// TODO Refactor start
const session = require('express-session');
// TODO Refactor stop

db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced ...');
});

const app = express();
app.use(bodyParser.json());

// TODO Refactor start
app.use(session({
    secret: 'TODO',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// TODO Refactor stop

app.use('/users', require('./route/users'));
app.use('/cumulativeitems', require('./route/cumulativeitems'));
app.use('/secrets', require('./route/secrets'));

app.use(express.static(path.join(__dirname, 'public')));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
