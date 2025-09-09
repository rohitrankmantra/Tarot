"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function CartDetails() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from API
  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cart", { credentials: "include" });
      const data = await res.json();
      if (res.ok) setCartItems(data);
      else toast.error("❌ Failed to fetch cart: " + (data.error || ""));
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Update quantity in backend
  const handleQuantityChange = async (productId, newQty) => {
    try {
      const res = await fetch("/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: Number(newQty) }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) setCartItems(data);
      else toast.error("❌ Failed to update quantity: " + (data.error || ""));
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong");
    }
  };

  // Remove item from backend
  const handleRemove = async (productId) => {
    try {
      const res = await fetch(`/api/cart/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) setCartItems(data);
      else toast.error("❌ Failed to remove item: " + (data.error || ""));
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong");
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) return <p className="text-center py-20">Loading cart...</p>;

  return (
    <main className="max-w-4xl mx-auto mt-40 bg-card/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 mystical-shadow">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 underline text-accent">
        Your Cart
      </h1>

      {cartItems.length === 0 && (
        <p className="text-center text-muted-foreground py-6">Your cart is empty.</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.productId}
          className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-white/20 py-4"
        >
          <div className="mb-2 sm:mb-0">
            <a href="#" className="font-medium text-accent hover:underline text-lg">
              {item.name}
            </a>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <label className="text-muted-foreground font-medium">Qty:</label>
            <select
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
              className="bg-background/30 text-accent px-3 py-2 rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>

            <motion.button
              onClick={() => handleRemove(item.productId)}
              className="text-red-500 hover:text-red-600 font-bold text-lg px-4 py-2 rounded-2xl border border-red-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>

            <span className="ml-2 font-semibold text-[#ce42ee] text-lg">
              £{item.price * item.quantity}.00
            </span>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          {/* Total */}
          <div className="flex flex-col sm:flex-row justify-end mt-6 space-y-2 sm:space-y-0 sm:space-x-8 text-lg text-accent font-medium">
            <div>Shipping: £0.00</div>
            <div className="font-bold">Total: £{totalAmount}.00</div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a
              href="/"
              className="text-accent hover:underline text-lg font-medium"
            >
              « Continue shopping
            </a>

            <motion.button
              className="bg-accent text-white px-10 py-4 rounded-2xl font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to checkout
            </motion.button>
          </div>
        </>
      )}
    </main>
  );
}
