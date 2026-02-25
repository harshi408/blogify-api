import express from "express";

const router = express.Router();

// Dummy posts data
const posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
];

// Get all posts
router.get("/", (req, res) => {
  res.status(200).json(posts);
});

// Create post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

export default router;