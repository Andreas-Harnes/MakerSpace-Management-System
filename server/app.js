const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/api/user');
const item = require('./routes/api/item');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/api/users', user);
app.use('/api/items', item);

app.get('/', (req, res) => res.send('Hello from the MMS backend!'));

app.listen(port, () => console.log(`MMS backend listening on ${port} ...`));
