const commentService = require('../services/CommentService');

class CommentController {

    static async listCommentsByVideo(req, res) {
        const videoId = req.params.videoId;
        
        try {
            const comments = await commentService.listCommentsByVideo(videoId);
            res.json(comments);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getComment(req, res) {
        const videoId = req.params.videoId;
        const commentId = req.params.commentId;
        try {
            const myComment = await commentService.getComment(commentId, videoId);
            res.json(myComment);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async createComment(req, res) {
        const videoId = req.params.videoId;
        const body = {
            username: req.body.username,
            content: req.body.content,
            timestamp: new Date(),
            videoId: videoId
        };

        try {
            const commentSave = await commentService.createComment(body);
            res.status(201).json({
                status: "success",
                comment: commentSave
            });
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async updateComment(req, res) {
        const videoId = req.params.videoId;
        const commentId = req.params.commentId;
        const body = {
            username: req.body.username, content: req.body.content, timestamp: new Date()
        }
        try {
            const upRes = await commentService.updateComment(commentId, videoId, body);
            res.json(upRes);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteComment(req, res) {
        const videoId = req.params.videoId;
        const commentId = req.params.commentId;
        try {
            const delRes = await commentService.deleteComment(commentId, videoId);
            const myResponse = {
                status: "deleted",
                comment: delRes
            }
            res.json(myResponse);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = CommentController;