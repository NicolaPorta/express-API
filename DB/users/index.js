const mongoose = require('mongoose');
const Email = require('mongoose-type-mail');

// Create a schema for Users
const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { 
        type: Email,
        required: false
    },
    active: { type: Boolean, default: false },
    password: { type: String, required: true }
});

const User = mongoose.model('User', usersSchema);

module.exports = User;