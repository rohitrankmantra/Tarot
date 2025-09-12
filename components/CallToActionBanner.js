"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToActionBanner() {
  return (
    <section className="relative overflow-hidden mystical-gradient py-20">
      {/* Decorative Glow Circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-72 h-72 bg-[#f1c8fa] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-accent mb-6 drop-shadow-lg"
        >
          Ready to Begin Your Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black mb-8 max-w-2xl mx-auto leading-relaxed text-lg"
        >
          Take the first step towards clarity and guidance. Book your personalized tarot reading today
          and discover the insights waiting for you.
        </motion.p>

        <Link href="#services" passHref>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-accent text-accent-foreground px-10 py-4 rounded-2xl font-semibold 
                       hover:scale-105 transition-all duration-300 mystical-shadow overflow-hidden"
          >
            <span className="relative z-10">Book Your Reading Now</span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 opacity-30 animate-pulse"></span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
