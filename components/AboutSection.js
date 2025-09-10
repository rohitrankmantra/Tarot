"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl mystical-shadow">
              <img
                src="/serene-tarot-reader-with-mystical-cards-and-candle.jpg"
                alt="Professional tarot reader in mystical setting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full mystical-glow"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/30 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="font-serif text-3xl text-center md:text-left md:text-4xl lg:text-5xl text-foreground font-bold text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Welcome to Your Journey of Discovery
            </motion.h2>

            <motion.p
              className="text-lg text-center md:text-left text-muted-foreground leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              As a certified tarot advisor with over a decade of experience, I provide insightful guidance and clarity
              through the ancient wisdom of tarot. My readings offer a supportive space for self-reflection, helping you
              navigate life's challenges with confidence and purpose.
            </motion.p>

            <motion.p
              className="text-lg text-center md:text-left text-muted-foreground leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Whether you're seeking answers about love, career, or personal growth, each reading is tailored to your
              unique situation with compassion, intuition, and deep respect for your journey.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-[#ce42ee]">
                <div className="w-2 h-2 bg-[#ce42ee] rounded-full mystical-glow" />
                <span className="font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-[#ce42ee]">
                <div className="w-2 h-2 bg-[#ce42ee] rounded-full mystical-glow" />
                <span className="font-medium">Certified Advisor</span>
              </div>
              <div className="flex items-center space-x-2 text-[#ce42ee]">
                <div className="w-2 h-2 bg-[#ce42ee] rounded-full mystical-glow" />
                <span className="font-medium">Compassionate Guidance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
