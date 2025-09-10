// pages/api/checkout.js

import Cart from "@/models/Cart";
import Order from "@/models/Order";
import Stripe from "stripe";
import dbConnect from "@/lib/mongodb.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await dbConnect();

    // ✅ Get visitorId directly from cookie
    const visitorId = req.cookies.visitorId;
    if (!visitorId) {
      return res.status(400).json({ error: "Visitor ID missing in cookie" });
    }
    console.log("Visitor ID received from cookie:", visitorId);

    const { userInfo } = req.body;
    if (!userInfo) return res.status(400).json({ error: "User info missing" });

    // 1️⃣ Get cart items
    const cart = await Cart.findOne({ visitorId });
    console.log("Cart found:", cart);
    if (!cart || cart.items.length === 0)
      return res.status(400).json({ error: "Cart is empty" });

    // 2️⃣ Calculate total
    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // 3️⃣ Save order with pending payment
    const order = await Order.create({
      userInfo,
      items: cart.items,
      totalAmount,
      paymentStatus: "pending",
    });

    // 4️⃣ Create Stripe Checkout Session
    const line_items = cart.items.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: { name: item.name },
        unit_amount: item.price * 100, // Stripe expects cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: userInfo.email,
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    // 5️⃣ Save Stripe session ID in order
    order.stripeSessionId = session.id;
    await order.save();

    // 6️⃣ Return Stripe URL to frontend
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}
