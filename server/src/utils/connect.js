const mongoose = require('mongoose');
const config = require('config');
const logger = require('./logger');

async function connect() {
    const dbUri = config.get('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info('Connected to MongoDB!');
    } catch (error) {
        logger.error('Could not connect to MongoDB!', error);
        process.exit(1);
    }
}

module.exports = connect;