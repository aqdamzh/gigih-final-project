const Product = require('../models/Product');
const logger = require('../logger/api.logger');

class ProductRepository {
    static async listProductsByVideo(videoId) {
        const products = await Product.find({videoId: videoId});
        console.log(`products:::${products}`);
        return products;
    }
    static async getProduct(id, videoId) {
        const myProduct = await Product.findOne({
            _id: id, videoId: videoId});
        console.log(`product:::${myProduct}`);
        return myProduct;
    }
    static async addProduct(data) {
        const newProduct = new Product(data);
        let productSave = {};
        try {
            productSave = await newProduct.save();
            console.log(`added::product:::${productSave}`);
        }catch(err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return productSave;
    }
    static async updateProduct(id, videoId, data) {
        let myProduct = {};
        try {
            const upData = await Product.updateOne({_id: id, videoId: videoId}, data);
            if(upData.matchedCount>0){
                myProduct = await Product.findOne({_id: id, videoId: videoId});
                console.log(`updated::product:::${myProduct}`);
            }else {
                const err = 'NotFound in Database';
                logger.error('Error::' + err);
                throw new Error(err);
            }
        }catch(err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return myProduct;
    }
    static async deleteProduct(id, videoId){
        let data = {};
        try {
            data = await Product.findOneAndDelete({_id: id, videoId: videoId});
            console.log(`deleted::product:::${data}`);
        } catch (error) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return data;
    }
}

module.exports = ProductRepository;