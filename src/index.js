const express = require('express');
const app = express();
const PORT = 3000;

// Import your controller
const postController = require('./controllers/posts.controller');

// Middleware to parse JSON
app.use(express.json());

// Route for getting all posts
app.get('/api/v1/posts', postController.getAllPosts);

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Blogify API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(Server running at http://localhost:);
});
