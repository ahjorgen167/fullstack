const mongoose = require('mongoose');

PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
    },
    dateOfBirth: {
        type: Date,
        default: Date.now,
    },
    username: String,
    hairColor: String,
    // this ^  === hairColor: {type: String}
}, { collection: 'people' })

exports.PeopleSchema = PeopleSchema;