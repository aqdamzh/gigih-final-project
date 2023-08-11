const mongoose = require('mongoose');

const productScema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: Number
        },
        thumbnail: {
            required: true,
            type: String
        },
        link: {
            required: true,
            type: String
        },
        videoId: {
            required:true,
            type: mongoose.ObjectId
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('products', productScema);