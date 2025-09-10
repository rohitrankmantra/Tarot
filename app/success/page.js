"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    const verifyPayment = async () => {
      try {
        const res = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await res.json();

        if (res.ok) {
          setOrder(data);

          if (data.paymentStatus === "paid") {
            toast.success("✅ Payment successful!");

            // Clear cart (visitorId is taken from cookie inside the API)
            await fetch("/api/cart/clear", { method: "POST" });

            // Clear localStorage cart data
            localStorage.removeItem("cartItems");

            // Auto-redirect after 5 seconds
            setTimeout(() => {
              router.push("/");
            }, 5000);
          } else {
            toast.error("❌ Payment not completed.");
          }
        } else {
          toast.error("❌ " + (data.error || "Verification failed"));
        }
      } catch (err) {
        console.error(err);
        toast.error("❌ Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId, router]);

  if (loading) return <p className="text-center mt-20">Verifying payment...</p>;

  return (
    <div className="max-w-3xl mx-auto py-20 text-center">
      {order?.paymentStatus === "paid" ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="mb-4">Thank you, {order.userInfo.name}. Your order has been confirmed.</p>
          <p>Total Paid: £{order.totalAmount}</p>
          <p className="mt-4 text-sm text-gray-400">You will be redirected shortly...</p>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-red-500">Payment Failed or Pending</h1>
      )}
      <button
        onClick={() => router.push("/")}
        className="mt-8 px-6 py-3 bg-accent text-white rounded-xl hover:scale-105 transition-transform"
      >
        Back to Home
      </button>
    </div>
  );
}
