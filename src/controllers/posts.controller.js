// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.json({
    message: "All posts will be fetched from here"
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: `Fetching data for post with ID: ${postId}`
  });
};

module.exports = {
  getAllPosts,
  getPostById,
};
