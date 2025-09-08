"use client"

import { motion } from "framer-motion"

export default function ServiceDetails({ title, description, price, oldPrice, onSale }) {
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
            <motion.button
              className="flex-1 bg-primary text-primary-foreground px-10 py-4 rounded-2xl 
                         font-medium text-lg shadow-lg hover:mystical-glow hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>

            <motion.button
              className="flex-1 text-primary border border-primary px-10 py-4 rounded-2xl 
                         font-medium text-lg hover:bg-primary hover:text-primary-foreground 
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
