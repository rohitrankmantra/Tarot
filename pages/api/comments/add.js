import dbConnect from "@/lib/mongodb";
import Comment from "@/models/Comment";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const visitorId = req.cookies.visitorId; // middleware already sets this
      if (!visitorId) return res.status(400).json({ error: "No visitorId" });

      const { name, email, message } = req.body;
      if (!name || !email || !message)
        return res.status(400).json({ error: "Missing fields" });

      const comment = await Comment.create({
        uuid: visitorId,
        name,
        email,
        message,
      });

      res.status(201).json(comment);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const comments = await Comment.find().sort({ createdAt: -1 });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
