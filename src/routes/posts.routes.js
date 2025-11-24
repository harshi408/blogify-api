const express = require("express");
const router = express.Router();

const posts = [
  { id: 1, title: "First Post", content: "Hello from Blogify!" }
];

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.json(posts);
});

module.exports = router;
