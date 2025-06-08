const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Slide = sequelize.define('Slide', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  layout: {
    type: DataTypes.STRING,
    defaultValue: 'title-only'
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'slides'
});

module.exports = Slide;
