const Product = require('../models/Product');

class ProductController {

    static async listProductsByVideo(req, res) {
        const videoId = req.params.videoId;
        try {
            const products = await Product.find({videoId: videoId});
            res.json(products);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        try {
            const myProduct = await Product.findOne({
                _id: productId, videoId: videoId});
            res.json(myProduct);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async addProduct(req ,res) {
        const videoId = req.params.videoId;
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            link: req.body.link,
            videoId: videoId
        });
        try {
            const productSave = await newProduct.save();
            res.status(201).json(productSave);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async updateProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        const {name, price, thumbnail, link} = req.body;
        try {
            const upRes = await Product.updateOne({_id: productId, videoId: videoId}, {
                name: name, price: price, thumbnail: thumbnail, link: link
            });
            if(upRes.matchedCount>0){
                const myPorduct = await Product.findOne({_id: productId, videoId: videoId});
                res.json(myPorduct);
            }else {
                res.status(404).json({message: "Id not found"});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        try {
            const delRes = await Product.findOneAndDelete({_id: productId, videoId: videoId});
            const myResponse = {
                status: "deleted",
                product: delRes
            }
            res.json(myResponse);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = ProductController;