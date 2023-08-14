const Comment = require('../models/Comment');
const logger = require('../logger/api.logger');

class CommentRepository {

    static async listCommentsByVideo(videoId){
        const comments = await Comment.find({videoId: videoId}).sort( { timestamp: -1 } );
        console.log(`comments:::${comments}`);
        return comments;
    }

    static async getComment(id, videoId){
        const myComment = await Comment.findOne({_id: id, videoId: videoId});
        console.log(`comment:::${myComment}`);
        return myComment;
    }
    
    static async createComment(data){
        const newComment = new Comment(data);
        let createdComm = {};
        try {
            createdComm = await newComment.save();
            console.log(`created::comment:::${createdComm}`);
        }catch(err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return createdComm;
    }

    static async updateComment(id, videoId, data) {
        let myComment = {};
        try {
            const upData = await Comment.updateOne({_id: id, videoId: videoId}, data);
            if(upData.matchedCount>0){
                myComment = await Comment.findOne({_id: id, videoId: videoId});
                console.log(`updated::comment:::${myComment}`);
            }else {
                const err = 'NotFound in Database';
                logger.error('Error::' + err);
                throw new Error(err);
            }
        }catch(err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return myComment;
    }

    static async deleteComment(id, videoId) {
        let delData = {};
        try {
            delData = await Comment.findOneAndDelete({_id: id, videoId: videoId});
            console.log(`deleted::comment:::${delData}`);
        }catch(err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return delData;
    }
}

module.exports = CommentRepository;