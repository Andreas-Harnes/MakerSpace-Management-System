const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const db = require('./config/db.config.js');
const passportConfig = require('./passport.config');
const env = require('./config/env');
const port = 3000;

db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced ...');
});

const app = express();
app.use(bodyParser.json());
app.use(session({
    name: 'mms.id',
    resave: false,
    saveUninitialized: false,
    secret: env.cookie.secret
}));

app.use(passportConfig.initialize());
app.use(passportConfig.session());

app.use('/users', require('./route/users'));
app.use('/cumulativeitems', require('./route/cumulativeitems'));
app.use('/secrets', require('./route/secrets'));

app.use(express.static(path.join(__dirname, 'public')));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
