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

  const token = jwt.sign(
    { id: user.id },
    "supersecretkey",
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true
  });

  res.status(200).json({ message: "Login successful" });
};
