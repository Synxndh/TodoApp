const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes');
const connect = require('./config/db');

connect();

app.use(express.json());

route(app);

app.listen(port, () => console.log('App listening on port: ', port));
