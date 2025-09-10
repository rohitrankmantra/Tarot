"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { toast } from "sonner";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!sessionId) {
        toast.error("❌ Missing session ID");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/checkout/success?session_id=${sessionId}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch order");

        setOrder(data);
      } catch (err) {
        console.error(err);
        toast.error("❌ " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [sessionId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        ⏳ Verifying your payment...
      </div>
    );

  if (!order)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        ❌ Payment verification failed.
      </div>
    );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold text-accent mb-6">✅ Payment Successful!</h1>
        <p className="text-lg mb-4">
          Thank you, <strong>{order.userInfo.name}</strong>! Your payment of{" "}
          <strong>£{order.totalAmount}</strong> has been received.
        </p>
        <p className="mb-6">Your order includes:</p>
        <ul className="mb-6 space-y-2">
          {order.items.map((item, index) => (
            <li key={index} className="text-left">
              • {item.name} — £{item.price} × {item.quantity}
            </li>
          ))}
        </ul>
        <p className="text-green-500 font-medium">Payment Status: {order.paymentStatus}</p>
      </div>
    </main>
  );
}
