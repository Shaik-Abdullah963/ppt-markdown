// backend/src/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database.js');    // <— your DB config
const slideRoutes = require('./routes/slideRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Slide CRUD
app.use('/slides', slideRoutes);

// Only start DB sync & server when run directly (not when required by tests)
if (require.main === module) {
  sequelize.sync().then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`API listening on port ${port}`);
    });
  });
}

module.exports = app;
