const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello from the MMS backend!'));

app.listen(port, () => console.log(`MMS backend listening on ${port} ...`));
