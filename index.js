'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const knex = require('knex');
const { Client } = require('pg');
const path = require('path');

// const client = new Client({

// });

// client.connect()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// client.query('SELECT $1::text as message', ['Hello World!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   client.end();
// });
let db;
if (process.env.DATABASE_URL) {
  // Production
  db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
  });
} else {
  db = knex({
    client: 'pg',
    connection: {
      user: 'super',
      database: 'chatter'
    }
  });
}

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
