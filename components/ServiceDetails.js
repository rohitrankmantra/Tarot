"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { API_URL } from "@/utils/api";


export default function ServiceDetails({
  productId,
  title,
  description,
  price,
  oldPrice,
  onSale,
}) {
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/cart/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          name: title,
          price: parseFloat(price),
          quantity: 1,
        }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setPopupOpen(true); // show popup instead of toast
      } else {
        alert("❌ Error: " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    }
    setLoading(false);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div
          className="relative w-full max-w-3xl bg-card/70 backdrop-blur-xl rounded-3xl 
                     p-10 md:p-16 text-center shadow-2xl border border-white/10 mystical-shadow 
                     hover:mystical-glow transition-all duration-500"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Sale Badge */}
          {onSale && (
            <div className="absolute -top-4 right-6 bg-primary text-primary-foreground 
                            px-4 py-1 rounded-full text-sm font-medium shadow-md">
              Sale
            </div>
          )}

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-8">
            {title}
          </h2>

          {/* Price */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {oldPrice && (
              <span className="text-xl md:text-2xl line-through text-muted-foreground">
                £{oldPrice}
              </span>
            )}
            <span className="text-3xl md:text-4xl font-semibold text-[#ce42ee]">
              £{price}
            </span>
          </div>

          {/* Description */}
          <motion.div
            className="text-lg text-muted-foreground leading-relaxed mb-12 space-y-5 text-pretty max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <motion.button
              className="flex-1 bg-primary text-primary-foreground px-10 py-4 rounded-2xl 
                         font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button> */}

            <motion.button
              onClick={handleAddToCart}
              disabled={loading}
             className="flex-1 bg-primary text-primary-foreground px-10 py-4 rounded-2xl 
                         font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 🔹 Popup Modal */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center md:items-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-xl mystical-shadow text-center max-w-md mx-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Added to cart:
              </h3>
              <p className="text-[#ce42ed] font-medium text-lg mb-6">{title}</p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setPopupOpen(false)}
                  className="px-5 py-2 rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Continue Shopping
                </button>
                <Link
                  href="/cart"
                  className="px-5 py-2 rounded-xl bg-primary text-primary-foreground hover:mystical-glow transition-all"
                >
                  Go to Cart
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
