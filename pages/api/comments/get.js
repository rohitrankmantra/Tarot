// pages/api/comments/get.js
import dbConnect from "@/lib/mongodb";
import Comment from "@/models/Comment";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await dbConnect();

    const comments = await Comment.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}
