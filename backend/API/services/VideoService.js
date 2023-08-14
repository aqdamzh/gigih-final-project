const videoRepository = require('../repositories/VideoRepository');

class VideoService {
    static async listVideos() {
        return await videoRepository.listVideos();
    }

    static async getVideo(id) {
        return await videoRepository.getVideo(id);
    }

    static async createVideo(data) {
        return await videoRepository.createVideo(data);
    }

    static async updateVideo(id, data) {
        return await videoRepository.updateVideo(id, data);
    }

    static async deleteVideo(id) {
        return await videoRepository.deleteVideo(id);
    }
}

module.exports = VideoService;