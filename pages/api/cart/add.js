import dbConnect from "@/lib/mongodb";
import Cart from "@/models/Cart";
import * as cookie from "cookie";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await dbConnect();

    // safely parse cookies
    const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
    const visitorId = cookies.visitorId;

    if (!visitorId) return res.status(400).json({ error: "No visitorId cookie" });

    const { productId, name, price, quantity } = req.body;

    if (!productId || !name || !price) return res.status(400).json({ error: "Missing fields" });

    let cart = await Cart.findOne({ visitorId });
    if (!cart) {
      cart = new Cart({
        visitorId,
        items: [{ productId, name, price, quantity: quantity || 1 }],
      });
    } else {
      const existingItem = cart.items.find((item) => item.productId === productId);
      if (existingItem) existingItem.quantity += quantity || 1;
      else cart.items.push({ productId, name, price, quantity: quantity || 1 });
    }

    await cart.save();
    return res.status(200).json(cart);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
