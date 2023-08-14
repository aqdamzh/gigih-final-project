const Video = require('../models/Video');
const logger = require('../logger/api.logger');

class VideoRepository {
    static async listVideos() {
        const videos = await Video.find();
        console.log(`videos:::${videos}`);
        return videos;
    }

    static async getVideo(id) {
        const myVideo = await Video.findOne({_id: id});
        console.log(`video:::${myVideo}`);
        return myVideo;
    }

    static async createVideo(data) {
        const newVideo = new Video(data);
        let videoSave = {};
        try {
            videoSave = await newVideo.save();
            console.log(`created::video:::${videoSave}`);
        } catch (err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return videoSave;
    }

    static async updateVideo(id, data) {
        let myVideo = {};
        try {
            const upData = await Video.updateOne({_id: id}, data);
            if(upData.matchedCount>0){
                myVideo = await Video.findOne({_id: id});
                console.log(`updated::video:::${myVideo}`);
            }else {
                const err = 'NotFound in Database';
                logger.error('Error::' + err);
                throw new Error(err);
            }
        }catch (err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return myVideo;
    }

    static async deleteVideo(id) {
        let data = {};
        try {
            data = await Video.findOneAndDelete({_id: id});
            console.log(`deleted::video:::${data}`);
        } catch (err) {
            logger.error('Error::' + err);
            throw new Error(err);
        }
        return data;
    }

}

module.exports = VideoRepository;