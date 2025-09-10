"use client";

import Header from "@/components/Header";
import OrderSummary from "@/components/checkout/OrderSummary";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const handlePayment = () => {
    alert("Proceeding to payment (Stripe integration later)");
    // Here you’ll trigger Stripe/UPI/etc.
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <h2 className="text-3xl font-serif font-bold text-accent underline">
          Payment
        </h2>

        {/* Show order summary again for review */}
        <OrderSummary />

        {/* Payment button */}
        <motion.button
          onClick={handlePayment}
          className="w-full bg-accent text-white py-4 rounded-2xl font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Confirm & Pay
        </motion.button>
      </div>
    </main>
  );
}
