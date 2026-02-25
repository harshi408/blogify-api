import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { title: "First Post" },
    { title: "Second Post" }
  ]);
});

export default router;