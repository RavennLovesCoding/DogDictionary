const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const indexRoutes = require('./routes/index.js');

require('dotenv').config();

const app = express();
app.use(cors());
app.use('/api', indexRoutes);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dog_dictionary'
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM language;';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('App is listening on port ' + listener.address().port);
});
