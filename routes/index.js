const express = require('express');
const router = express.Router();
const db = require('../db.js');
const cors = require('cors');


const queryDatabase = (sql, res) => {
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database Error:', err.message);
      return res.status(500).json({ error: 'Database query failed', details: err.message });
    }
    return res.json(results);
  });
};

// Define routes
router.get('/welcome', (req, res) => {
  console.log("Hitting the welcome route");
});


router.get('/languages', (req, res) => {
  console.log("Fetching languages...");  
  queryDatabase('SELECT * FROM language;', res);
});

router.get('/languages/nose', (req, res) => {
  console.log("Fetching languages with body part of Nose ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'Nose';", res);
});

router.get('/languages/eye', (req, res) => {
   console.log("Fetching languages with body part of Eye ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'Eye';", res);
});

router.get('/languages/mouth', (req, res) => {
   console.log("Fetching languages with body part of Mouth ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'Mouth';", res);
});

router.get('/languages/fullbody', (req, res) => {
   console.log("Fetching languages with body part of Full_body ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'Full_body';", res);
});

router.get('/languages/head', (req, res) => {
   console.log("Fetching languages with body part of head ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'head';", res);
});

router.get('/languages/ear', (req, res) => {
   console.log("Fetching languages with body part of ear ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'ear';", res);
});

router.get('/languages/tail', (req, res) => {
  console.log("Fetching languages with body part of tail ...");  
  queryDatabase("SELECT * FROM language WHERE body_part = 'Tail';", res);
});

module.exports = router;
