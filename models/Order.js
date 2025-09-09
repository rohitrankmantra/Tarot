import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
      notes: { type: String }, // optional notes
    },
    items: [
      {
        productId: { type: String, required: true }, // service ID
        name: { type: String, required: true }, // service name
        price: { type: Number, required: true }, // per item
        quantity: { type: Number, default: 1 },
      },
    ],
    totalAmount: { type: Number, required: true },

    // Payment & Status
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    stripeSessionId: { type: String }, // to match webhook event
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
