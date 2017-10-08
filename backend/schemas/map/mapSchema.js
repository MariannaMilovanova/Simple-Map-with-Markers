const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const mapSchema = new Schema({
    name: {
        type: String,
        trim: true,
        default: 'My Simple Map'
    },
    description: String,
    userMarkers: [],
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {versionKey: false});

module.exports = mongoose.model('map', mapSchema);