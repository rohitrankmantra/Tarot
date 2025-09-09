// models/Cart.js
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    visitorId: { type: String, required: true }, // cookie ID
    items: [
      {
        productId: { type: String, required: true }, // tarot service ID
        name: { type: String, required: true }, // tarot service name
        price: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
