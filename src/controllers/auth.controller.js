import jwt from "jsonwebtoken";
import { users } from "../models/posts.model.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Use environment variable for secret (important for production)
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET || "supersecretkey",
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false // keep false for now (Render free plan works fine)
  });

  return res.status(200).json({
    message: "Login successful",
    token
  });
};   