// pages/api/cart/index.js
import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import * as cookie from "cookie";

export default async function handler(req, res) {
  await dbConnect();
  
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const visitorId = cookies.visitorId;

  if (!visitorId) return res.status(400).json({ error: "No visitorId cookie" });

  if (req.method === "GET") {
    // Return all cart items
    const cart = await Cart.findOne({ visitorId });
    return res.status(200).json(cart ? cart.items : []);
  }

  if (req.method === "PUT") {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) return res.status(400).json({ error: "Missing fields" });

    try {
      let cart = await Cart.findOne({ visitorId });
      if (!cart) return res.status(404).json({ error: "Cart not found" });

      const item = cart.items.find((i) => i.productId === productId);
      if (!item) return res.status(404).json({ error: "Item not found in cart" });

      item.quantity = Number(quantity);
      await cart.save();

      return res.status(200).json(cart.items);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
