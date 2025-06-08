const express = require('express');
const app = express();
const sequelize = require('./config/database');
const Slide = require('./models/Slide');
// Healthcheck endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
const port = process.env.PORT || 4000;
const server = asequelize.sync().then(() => { app.listen(port, () => console.log(`API listening on port ${port}`));
});

module.exports = server;   // so tests can import & close it
