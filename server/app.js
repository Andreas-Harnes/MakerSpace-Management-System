const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const items = require('./routes/api/items');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/items', items);

app.get('/', (req, res) => res.send('Hello from the MMS backend!'));

app.listen(port, () => console.log(`MMS backend listening on ${port} ...`));
