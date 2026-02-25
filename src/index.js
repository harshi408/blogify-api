import express from "express";
import cookieParser from "cookie-parser";

import postRoutes from "./routes/posts.routes.js";
import { login } from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

// Root route for browser test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Auth route
app.post("/api/auth/login", login);

// Posts route
app.use("/api/posts", postRoutes);

// IMPORTANT: for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});