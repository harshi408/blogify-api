import express from "express";
import { deletePost } from "../controllers/posts.controller.js";
import protect from "../auth.middleware.js";

const router = express.Router();

router.delete("/:id", protect, deletePost);

export default router;
        