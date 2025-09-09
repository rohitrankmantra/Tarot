"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function OrderSummary() {
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

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) return <p className="text-center py-8">Loading order summary...</p>;

  if (cartItems.length === 0) {
    return (
      <div className="p-6 bg-card/70 rounded-2xl border border-white/10 text-center">
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-card/70 rounded-2xl border border-white/10 mystical-shadow mt-12">
      <h2 className="text-2xl font-serif font-bold mb-4 text-accent underline">
        Order Summary
      </h2>

      <ul className="divide-y divide-white/20">
        {cartItems.map((item) => (
          <li
            key={item.productId}
            className="flex justify-between py-3 text-lg"
          >
            <span>{item.name} × {item.quantity}</span>
            <span className="font-semibold text-[#ce42ee]">
              £{item.price * item.quantity}.00
            </span>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <div className="flex justify-between mt-6 text-lg font-medium">
        <span>Subtotal</span>
        <span>£{totalAmount}.00</span>
      </div>
      <div className="flex justify-between text-lg text-muted-foreground">
        <span>Shipping</span>
        <span>£0.00</span>
      </div>
      <div className="flex justify-between mt-4 text-xl font-bold text-accent">
        <span>Total</span>
        <span>£{totalAmount}.00</span>
      </div>
    </div>
  );
}
