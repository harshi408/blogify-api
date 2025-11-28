const postService = require("../services/posts.service");

exports.getAllPosts = (req, res) => {
  res.status(200).json(postService.findAllPosts());
};

exports.getPostById = (req, res) => {
  const id = Number(req.params.id);
  const post = postService.findPostById(id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.status(200).json(post);
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = postService.addPost(title, content);
  res.status(201).json(newPost);
};