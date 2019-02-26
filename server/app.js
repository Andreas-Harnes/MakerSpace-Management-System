const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config.js');
const path = require('path');
const port = 3000;

const app = express();

db.sequelize.sync({force: true}).then(() => {
    console.log('DB synced ...');
});

app.use(bodyParser.json());
app.use('/users', require('./route/users'));
app.use('/cumulativeitems', require('./route/cumulativeitems'));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
