const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SongSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    artistID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    timeIsAdded: {
        type: String
    },
    totalView: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    artistName: {
        type: String,
    }
}, {collection: 'song'}
);

const SongModel = mongoose.model('song', SongSchema);

module.exports = SongModel;