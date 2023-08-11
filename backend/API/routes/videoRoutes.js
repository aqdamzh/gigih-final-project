const express = require('express');
const VideoController = require('../controllers/VideoController');
const CommentController = require('../controllers/CommentController');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', VideoController.listVideos);
router.get('/:videoId', VideoController.getVideo);
router.post('/', VideoController.createVideo);
router.put('/:videoId', VideoController.updateVideo);
router.delete('/:videoId', VideoController.deleteVideo);

router.get('/:videoId/products', ProductController.listProductsByVideo);
router.post('/:videoId/products', ProductController.addProduct);
router.get('/:videoId/products/:productId', ProductController.getProduct);
router.put('/:videoId/products/:productId', ProductController.updateProduct);
router.delete('/:videoId/products/:productId', ProductController.deleteProduct);

router.get('/:videoId/comments', CommentController.listCommentsByVideo);
router.get('/:videoId/comments/:commentId', CommentController.getComment);
router.post('/:videoId/comments', CommentController.createComment);
router.put('/:videoId/comments/:commentId', CommentController.updateComment);
router.delete('/:videoId/comments/:commentId', CommentController.deleteComment);

module.exports = router;
