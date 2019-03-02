const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config.js');
const passport = require('./passport');
const path = require('path');
const port = 3000;

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
