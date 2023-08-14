const videoService = require('../services/VideoService');

class VideoController {

    static async listVideos(req, res) {
        try {
            const videos = await videoService.listVideos();
            res.json(videos);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getVideo(req, res) {
        const videoId = req.params.videoId;
        try {
            const myVideo = await videoService.getVideo(videoId);
            res.json(myVideo);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async createVideo(req, res) {
        const body = {
            title: req.body.title,
            src: req.body.src,
            thumbnail: req.body.thumbnail
        };

        try {
            const videoSave = await videoService.createVideo(body);
            res.status(201).json(videoSave);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async updateVideo(req, res) {
        const videoId = req.params.videoId;
        const body = {
            title: req.body.title,
            src: req.body.src,
            thumbnail: req.body.thumbnail
        };
        try {
            const myVideo = await videoService.updateVideo(videoId, body);
            res.json(myVideo);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteVideo(req ,res) {
        const videoId = req.params.videoId;
        try {
            const delRes = await videoService.deleteVideo(videoId);
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