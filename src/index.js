import express from "express";
import cookieParser from "cookie-parser";

import postRoutes from "./routes/posts.routes.js";
import { login } from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/api/auth/login", login);
app.use("/api/posts", postRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
