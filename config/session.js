const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize');
const { sequelize } = require('../app/models');

module.exports = {
  secret: 'Docfy2018',
  resave: false,
  saveUninitialized: true,
};
