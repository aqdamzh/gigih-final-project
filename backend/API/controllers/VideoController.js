const Video = require('../models/Video');

class VideoController {

    static async listVideos(req, res) {
        try {
            const videos = await Video.find();
            res.json(videos);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getVideo(req, res) {
        const videoId = req.params.videoId;
        try {
            const myVideo = await Video.findOne({_id: videoId});
            res.json(myVideo);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async createVideo(req, res) {
        const newVideo = new Video({
            title: req.body.title,
            src: req.body.src,
            thumbnail: req.body.thumbnail
        });

        try {
            const videoSave = await newVideo.save();
            res.status(201).json(videoSave);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async updateVideo(req, res) {
        const videoId = req.params.videoId;
        const {title, src, thumbnail} = req.body;
        try {
            const upRes = await Video.updateOne({_id: videoId}, {
                title: title, src: src, thumbnail: thumbnail
            });
            if(upRes.matchedCount>0){
                const myVideo = await Video.findOne({_id: videoId});
                res.json(myVideo);
            }else {
                res.status(404).json({message: "Id not found"});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteVideo(req ,res) {
        const videoId = req.params.videoId;
        try {
            const delRes = await Video.findOneAndDelete({_id: videoId});
            const myResponse = {
                status: "deleted",
                video: delRes
            }
            res.json(myResponse);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

}

module.exports = VideoController;