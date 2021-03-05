const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    social: {
        type: String,
        trim: true
    },
    socialID: {
        type: String,
        trim: true
    },
    permission: {
        type: String,
        trim: true
    },
    tym: {
        type: Array
    }    
}, {collection: 'user'}
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;