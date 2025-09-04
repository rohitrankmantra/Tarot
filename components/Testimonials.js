"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "California",
      text: "The Celtic Cross reading provided incredible clarity during a difficult time in my life. The insights were spot-on and helped me make important decisions with confidence.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael R.",
      location: "New York",
      text: "I was skeptical at first, but the love reading revealed patterns I hadn't noticed. It gave me the perspective I needed to improve my relationship. Truly transformative.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma L.",
      location: "London",
      text: "The live session was amazing - so interactive and personal. I felt heard and understood. The guidance has been invaluable for my personal growth journey.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Real experiences from people who found clarity and guidance through tarot readings.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-card rounded-3xl p-8 md:p-12 mystical-shadow text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="text-primary text-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    ★
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-8 text-pretty">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="text-muted-foreground">
                <p className="font-semibold text-card-foreground">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm">{testimonials[currentTestimonial].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary mystical-glow scale-125" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
