"use client"

import { motion } from "framer-motion"

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative bg-card rounded-3xl p-8 h-full mystical-shadow hover:mystical-glow transition-all duration-300 border border-border/50 hover:border-primary/30">
        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mystical-glow">
            Most Popular
          </div>
        )}

        {/* Icon */}
        <motion.div
          className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          {service.icon}
        </motion.div>

        {/* Content */}
        <div className="space-y-4 mb-6">
          <h3 className="font-serif text-xl md:text-2xl text-card-foreground font-semibold text-balance">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>

          {/* Details */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-primary font-semibold text-lg">{service.price}</span>
            <span className="text-muted-foreground">{service.duration}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <motion.button
            className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium hover:mystical-glow hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="flex-1 text-primary border border-primary px-6 py-3 rounded-2xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
