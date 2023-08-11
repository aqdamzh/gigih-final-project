const Comment = require('../models/Comment');

class CommentController {

    static async listCommentsByVideo(req, res) {
        const videoId = req.params.videoId;
        
        try {
            const comments = await Comment.find({videoId: videoId});
            res.json(comments);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getComment(req, res) {
        const videoId = req.params.videoId;
        const commentId = req.params.commentId;
        try {
            const myComment = await Comment.find({_id: commentId, videoId: videoId});
            res.json(myComment);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async createComment(req, res) {
        const videoId = req.params.videoId;
        const newComment = new Comment({
            username: req.body.username,
            content: req.body.content,
            timestamp: new Date(),
            videoId: videoId
        });

        try {
            const commentSave = await newComment.save();
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
        try {
            const upRes = await Comment.updateOne({_id: commentId, videoId: videoId}, {
                username: req.body.username, content: req.body.content, timestamp: new Date()
            });
            if(upRes.matchedCount>0){
                const myComment = await Comment.findOne({_id: commentId, videoId: videoId});
                res.json(myComment);
            }else {
                res.status(404).json({message: "Id not found"});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteComment(req, res) {
        const videoId = req.params.videoId;
        const commentId = req.params.commentId;
        try {
            const delRes = await Comment.findOneAndDelete({_id: commentId, videoId: videoId});
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