import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    uuid: { type: String, required: true }, // from backend (visitor id)
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true, collection: "Comments" } // auto adds createdAt / updatedAt
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
