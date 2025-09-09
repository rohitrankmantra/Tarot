import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import * as cookie from "cookie";

export default async function handler(req, res) {
  await dbConnect();

  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const visitorId = cookies.visitorId;
  const { productId } = req.query;

  if (!visitorId) return res.status(400).json({ error: "No visitorId cookie" });
  if (!productId) return res.status(400).json({ error: "No productId provided" });

  if (req.method === "DELETE") {
    try {
      const cart = await Cart.findOne({ visitorId });
      if (!cart) return res.status(404).json({ error: "Cart not found" });

      cart.items = cart.items.filter((i) => i.productId !== productId);
      await cart.save();

      return res.status(200).json(cart.items);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
