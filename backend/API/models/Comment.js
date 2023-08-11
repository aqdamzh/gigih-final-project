const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        username: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: String
        },
        timestamp: {
            required: true,
            type: Date
        },
        videoId: {
            required: true,
            type: mongoose.ObjectId
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('comments', commentSchema);