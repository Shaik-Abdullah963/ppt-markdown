const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Slide = sequelize.define('Slide', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,    // The raw Markdown source
    allowNull: false
  },
  layout: {
    type: DataTypes.STRING,  // e.g. 'title-only', 'code-focus'
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
