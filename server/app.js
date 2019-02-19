const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/users', require('./route/users'));
app.use('/items', require('./route/items'));

app.get('/', (req, res) => res.send('Hello from the MMS backend!'));

app.listen(port, '0.0.0.0', () => console.log(`MMS backend listening on ${port} ...`));
