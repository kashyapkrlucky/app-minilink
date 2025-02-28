// src/config/index.js
const dotenv = require('dotenv-safe');
dotenv.config();

const config = {
  development: {
    db: process.env.DB_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
  },
  production: {
    db: process.env.DB_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
  },
  test: {
    db: process.env.DB_URL_TEST,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
  },
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env]

