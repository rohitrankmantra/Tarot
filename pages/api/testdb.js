import dbConnect from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ success: true, message: "✅ MongoDB connected successfully!" });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
