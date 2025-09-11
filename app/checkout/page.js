"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { toast } from "sonner";
import { API_URL } from "@/utils/api";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);

  // Fetch cart once
  const fetchCart = async () => {
    setLoadingCart(true);
    try {
      const res = await fetch(`${API_URL}/api/cart`, { credentials: "include" });
      const data = await res.json();
      if (res.ok) setCartItems(data);
      else toast.error("❌ Failed to fetch cart: " + (data.error || ""));
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong");
    }
    setLoadingCart(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <CheckoutForm
          cartItems={cartItems}
          loadingCart={loadingCart}
        />

        {/* Right: Order Summary */}
        <OrderSummary cartItems={cartItems} loadingCart={loadingCart} />
      </div>
    </main>
  );
}
