"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [loadingId, setLoadingId] = useState(null);
  const [popupService, setPopupService] = useState(null);

  const services = [
    { id: "live1", icon: "🔮", title: "Live Session with Me", description: "Personal one-on-one reading session with real-time guidance and interactive discussion", price: 75, duration: "60 minutes", popular: true, learnMorePath: "/livesession" },
    { id: "celtic1", icon: "✨", title: "Celtic Cross Reading", description: "Comprehensive 10-card spread revealing past, present, future, and hidden influences", price: 45, duration: "Detailed report", learnMorePath: "/celticcross" },
    { id: "love1", icon: "💕", title: "Love Reading", description: "Explore matters of the heart, relationships, and romantic connections with compassion", price: 35, duration: "Focused insight", learnMorePath: "/lovereading" },
    { id: "life1", icon: "🌟", title: "General Life Reading", description: "Holistic overview of your current life path, challenges, and opportunities ahead", price: 40, duration: "Complete guidance", learnMorePath: "/generallife" },
    { id: "self1", icon: "🌸", title: "Self-Love Reading", description: "Nurture your relationship with yourself and discover your inner strength and worth", price: 30, duration: "Personal empowerment", learnMorePath: "/selflove" },
    { id: "month1", icon: "🌙", title: "Next Month Reading", description: "Prepare for what's coming with insights into the energies and opportunities ahead", price: 25, duration: "Monthly forecast", learnMorePath: "/nextmonth" },
    { id: "q1", icon: "❓", title: "Answer to a Question", description: "Get clear, focused guidance on a specific question or situation you're facing", price: 20, duration: "Direct answer", learnMorePath: "/answertoquestion" },
  ];

  // 🔹 Add to cart handler
  const handleAddToCart = async (service) => {
    setLoadingId(service.id);
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: service.id,
          name: service.title,
          price: parseFloat(service.price),
          quantity: 1,
        }),
        credentials: "include",
      });

      const data = await res.json();
      if (res.ok) {
        setPopupService(service); // show popup
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
    setLoadingId(null);
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Tarot Reading Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our range of personalized tarot readings, each designed to provide clarity, insight, and guidance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-card rounded-3xl p-8 h-full mystical-shadow hover:mystical-glow border border-border/50 hover:border-primary/30">
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-4xl mb-6">{service.icon}</div>

                <div className="space-y-4 mb-6">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#ce42ee] font-semibold text-lg">£{service.price}</span>
                    <span className="text-muted-foreground">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={() => handleAddToCart(service)}
                    disabled={loadingId === service.id}
                    className="flex-1 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-medium hover:mystical-glow hover:scale-105 transition-all"
                    whileTap={{ scale: 0.95 }}
                  >
                    {loadingId === service.id ? "Adding..." : "Add to Cart"}
                  </motion.button>

                  <Link href={service.learnMorePath} passHref>
                    <motion.button
                      className="flex-1 text-primary border border-primary px-8 py-4 rounded-2xl font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔹 Popup Modal */}
      <AnimatePresence>
        {popupService && (
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
              <p className="text-[#ce42ed] font-medium text-lg mb-6">
                {popupService.title}
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setPopupService(null)}
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
