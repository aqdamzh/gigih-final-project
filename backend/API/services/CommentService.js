const commentRepository = require('../repositories/CommentRepository');

class CommentService {
    static async listCommentsByVideo(videoId) {
        return await commentRepository.listCommentsByVideo(videoId);
    }

    static async getComment(id, videoId) {
        return await commentRepository.getComment(id, videoId);
    }

    static async createComment(data) {
        return await commentRepository.createComment(data);
    }

    static async updateComment(id, videoId, data) {
        return await commentRepository.updateComment(id, videoId, data);
    }

    static async deleteComment(id, videoId) {
        return await commentRepository.deleteComment(id, videoId);
    }
}

module.exports = CommentService;