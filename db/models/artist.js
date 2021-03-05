const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true, 
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    }
}, {collection: 'artist'}
);

const ArtistModel = mongoose.model('artist', ArtistSchema);

module.exports = ArtistModel;