// routes/repetitions.js
const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.all('SELECT * FROM repetitions', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
      return;
    }
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { date, repetitions } = req.body;
  db.run('INSERT INTO repetitions (date, repetitions) VALUES (?, ?)', [date, repetitions], err => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(201).send('Repetition added successfully');
  });
});

module.exports = router;
