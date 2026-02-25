import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/posts.routes.js";
import { login } from "./controllers/auth.controller.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Root route
app.get("/", (req, res) => {
  res.status(200).send("Blogify API is running 🚀");
});

// Auth route
app.post("/api/auth/login", login);

// Posts route
app.use("/api/posts", postRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});