const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const { Garden } = require('./gardenModel');

const Partnership = sequelize.define('Partnership', {
  Integration_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  OrganizationName: {
    type: DataTypes.STRING,
  },
  Activities: {
    type: DataTypes.STRING,
  },
  Price: {
    type: DataTypes.FLOAT,
  },
  Date: {
    type: DataTypes.DATE,
  },
  Duration: {
    type: DataTypes.INTEGER,
  },
});
module.exports = { Partnership };