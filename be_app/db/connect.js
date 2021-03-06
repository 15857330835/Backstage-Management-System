const mongoose = require('mongoose');

const HOST_NAME = '127.0.0.1';
const PORT = '27017';
const DB_NAME = '1908';

const DB_URL = `mongodb://${HOST_NAME}:${PORT}/${DB_NAME}`;

const connect = {
    init() {
        mongoose.connect(DB_URL, err => {
            if (err) console.log(err);
            console.log('The db is connect success...');
        })
    }
}

module.exports = {
    connect
}