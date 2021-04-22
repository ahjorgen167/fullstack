const mongoose = require('mongoose');

exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
    },
}, { collection: 'users' });
