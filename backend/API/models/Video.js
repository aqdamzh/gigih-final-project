const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        title: {
            required: true,
            type: String
        },
        src: {
            required: true,
            type: String
        },
        thumbnail: {
            required: true,
            type: String
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Videos', videoSchema);