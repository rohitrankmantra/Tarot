// pages/api/verify-payment.js
import Stripe from "stripe";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const { session_id } = req.query;

  if (!session_id) {
    return res.status(400).json({ error: "Missing session ID" });
  }

  try {
    await dbConnect();

    // 1️⃣ Retrieve Stripe session
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session) return res.status(404).json({ error: "Session not found" });

    // 2️⃣ Find order by stripeSessionId
    const order = await Order.findOne({ stripeSessionId: session.id });

    if (!order) return res.status(404).json({ error: "Order not found" });

    // 3️⃣ Update payment status if paid
    if (session.payment_status === "paid" && order.paymentStatus !== "paid") {
      order.paymentStatus = "paid";
      await order.save();
    }

    // 4️⃣ Return order details
    res.status(200).json({
      _id: order._id,
      userInfo: order.userInfo,
      items: order.items,
      totalAmount: order.totalAmount,
      paymentStatus: order.paymentStatus,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
