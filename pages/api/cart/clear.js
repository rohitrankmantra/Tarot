// pages/api/cart/clear.js
import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await dbConnect();

    // Get visitorId from cookie
    const visitorId = req.cookies.visitorId;

    if (!visitorId) {
      return res.status(400).json({ error: "Visitor ID not found in cookies" });
    }

    // Clear all items in the cart for this visitor
    const cart = await Cart.findOne({ visitorId });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    cart.items = []; // empty the items array
    await cart.save();

    res.status(200).json({ message: "Cart items cleared successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
