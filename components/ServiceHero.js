"use client"

import { motion } from "framer-motion"

export default function ServiceHero({ headline, subhead, primaryCTA, secondaryCTA, background, image }) {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: background }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={headline}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-accent font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-accent/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subhead}
        </motion.p>

        {/* CTA Buttons */}
        {/* <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:mystical-glow hover:scale-105 transition-all duration-300 mystical-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryCTA}
          </motion.button>

          {secondaryCTA && (
            <motion.button
              className="text-accent border-2 border-accent px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {secondaryCTA}
            </motion.button>
          )}
        </motion.div> */}
      </div>
    </section>
  )
}
