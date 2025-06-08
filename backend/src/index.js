const express = require('express');
const app = express();
// Parse JSON request bodies
app.use(express.json());
// Healthcheck endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Slide CRUD
const slideRoutes = require('./routes/slideRoutes');
app.use('/slides', slideRoutes);

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

module.exports = server;   // so tests can import & close it
