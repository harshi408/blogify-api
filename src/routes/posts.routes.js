import express from 'express';
import postController from '../controllers/posts.controller.js';

const router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

export default router;
