const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from the MMS backend!'));

app.listen(port, () => console.log(`MMS backend listening on ${port} ...`));
