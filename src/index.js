// src/index.js

const express = require("express");
const app = express();
const postsRouter = require("./routes/posts.routes");

app.use(express.json());

// Mount posts router
app.use("/api/v1/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
