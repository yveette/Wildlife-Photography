const mongoose = require('mongoose');
require('../models/User');

// TODO change database name
const dbName = 'wildlife';
const connnectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
    try {
        mongoose.connect(connnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }

}