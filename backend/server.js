// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const repetitionsRouter = require('./routes/repetitions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/repetitions', repetitionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
