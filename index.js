'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
