const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        enum: ['user','admin'],
        default: 'user',
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userModel);