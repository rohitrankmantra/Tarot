"use client";

import { motion } from "framer-motion";

export default function PaymentSection() {
  const handlePayment = () => {
    alert("Proceeding to payment (Stripe integration later)");
  };

  return (
    <div className="bg-card/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 mystical-shadow">
      <h2 className="text-2xl font-serif font-bold mb-6 underline text-accent">
        Payment
      </h2>
      <motion.button
        onClick={handlePayment}
        className="w-full bg-accent text-white py-4 rounded-2xl font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Proceed to Payment
      </motion.button>
    </div>
  );
}
