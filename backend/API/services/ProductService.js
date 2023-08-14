const productRepository = require('../repositories/ProductRepository');

class ProductService {
    static async listProductsByVideo(videoId) {
        return await productRepository.listProductsByVideo(videoId);
    }

    static async getProduct(id, videoId) {
        return await productRepository(id, videoId);
    }

    static async addProduct(data) {
        return await productRepository.addProduct(data);
    }

    static async updateProduct(id, videoId, data) {
        return await productRepository.updateProduct(id, videoId, data);
    }

    static async deleteProduct(id, videoId) {
        return await productRepository.deleteProduct(id, videoId);
    }
}

module.exports = ProductService;