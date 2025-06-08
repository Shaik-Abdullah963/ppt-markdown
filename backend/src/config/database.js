const { Sequelize } = require('sequelize');
const path = require('path');

// Use SQLite file in ../db folder
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../db/slides.sqlite'),
  logging: false,    // turn off SQL logs
});

module.exports = sequelize;
