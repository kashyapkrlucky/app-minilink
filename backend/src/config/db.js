// src/config/db.js
const mongoose = require('mongoose');
const config = require('./index');
const { chalkStyles } = require('../utils/chalkUtils');

const connectDB = async () => {
    try {
        await mongoose.connect(config['db']);
        console.log(chalkStyles.info(`✓ MongoDB connected`));
    } catch (err) {
        console.error(chalkStyles.error(`✗ MongoDB not connected ${err.message}`));
        // process.exit(1);
    }
};

module.exports = connectDB;
