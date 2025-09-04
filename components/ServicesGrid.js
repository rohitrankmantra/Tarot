"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const services = [
    {
      id: 1,
      icon: "🔮",
      title: "Live Session with Me",
      description: "Personal one-on-one reading session with real-time guidance and interactive discussion",
      price: "From $75",
      duration: "60 minutes",
      popular: true,
    },
    {
      id: 2,
      icon: "✨",
      title: "Celtic Cross Reading",
      description: "Comprehensive 10-card spread revealing past, present, future, and hidden influences",
      price: "From $45",
      duration: "Detailed report",
    },
    {
      id: 3,
      icon: "💕",
      title: "Love Reading",
      description: "Explore matters of the heart, relationships, and romantic connections with compassion",
      price: "From $35",
      duration: "Focused insight",
    },
    {
      id: 4,
      icon: "🌟",
      title: "General Life Reading",
      description: "Holistic overview of your current life path, challenges, and opportunities ahead",
      price: "From $40",
      duration: "Complete guidance",
    },
    {
      id: 5,
      icon: "🌸",
      title: "Self-Love Reading",
      description: "Nurture your relationship with yourself and discover your inner strength and worth",
      price: "From $30",
      duration: "Personal empowerment",
    },
    {
      id: 6,
      icon: "🌙",
      title: "Next Month Reading",
      description: "Prepare for what's coming with insights into the energies and opportunities ahead",
      price: "From $25",
      duration: "Monthly forecast",
    },
    {
      id: 7,
      icon: "❓",
      title: "Answer to a Question",
      description: "Get clear, focused guidance on a specific question or situation you're facing",
      price: "From $20",
      duration: "Direct answer",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            Tarot Reading Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Choose from our range of personalized tarot readings, each designed to provide clarity, insight, and
            guidance for your unique journey. Every reading is conducted with care, intuition, and deep respect for your
            path.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
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
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Not sure which reading is right for you? Let's discuss your needs.
          </p>
          <motion.button
            className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:mystical-glow hover:scale-105 transition-all duration-300 mystical-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
