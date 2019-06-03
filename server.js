'use strict';

const cors = require('cors');
const express = require('express');
const app = express();
const items = require('./routes/items');
const port = 3000;


app.use(cors());

app.use(express.json());
app.use('/', items);


app.listen(port, () => console.log(`app is up and running on port 3000; ${port}`));
