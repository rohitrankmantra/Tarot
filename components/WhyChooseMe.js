"use client"

import { motion } from "framer-motion"

export default function WhyChooseMe() {
  const reasons = [
    {
      id: 1,
      icon: "💫",
      title: "Intuitive Guidance",
      description:
        "Each reading is conducted with care, compassion, and deep intuition — offering clarity beyond the surface.",
    },
    {
      id: 2,
      icon: "🌙",
      title: "Years of Experience",
      description:
        "Over 10+ years of working with tarot, energy, and intuitive practices to guide people on their life paths.",
    },
    {
      id: 3,
      icon: "🔮",
      title: "Personalized Approach",
      description:
        "No two readings are alike — every session is tailored to your unique energy and specific questions.",
    },
    {
      id: 4,
      icon: "✨",
      title: "Safe & Supportive Space",
      description:
        "Your comfort matters most. I create a safe, open space where you can share and receive without judgment.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            Why Choose Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            My mission is to provide guidance that resonates, inspires, and empowers you to navigate life’s journey with
            confidence and clarity.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-card/90 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center mystical-shadow hover:mystical-glow transition-all duration-300 border border-border/50 hover:border-primary/30">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {reason.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl text-card-foreground font-semibold">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
