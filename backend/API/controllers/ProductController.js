const ProductRepository = require('../repositories/ProductRepository');
const productService = require('../services/ProductService');

class ProductController {

    static async listProductsByVideo(req, res) {
        const videoId = req.params.videoId;
        try {
            const products = await productService.listProductsByVideo(videoId);
            res.json(products);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        try {
            const myProduct = await ProductRepository.getProduct(productId, videoId);
            res.json(myProduct);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async addProduct(req ,res) {
        const videoId = req.params.videoId;
        const body = {
            name: req.body.name,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            link: req.body.link,
            videoId: videoId
        };
        try {
            const data = await productService.addProduct(body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async updateProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        const body = {
            name: req.body.name,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            link: req.body.link
        };
        try {
            const myProduct = await productService.updateProduct(productId, videoId, body);
                res.json(myProduct);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteProduct(req, res) {
        const videoId = req.params.videoId;
        const productId = req.params.productId;
        try {
            const delRes = await productService.deleteProduct(productId, videoId);
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