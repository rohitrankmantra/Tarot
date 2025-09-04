"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      headline: "Discover Your Path Forward",
      subhead: "Gain clarity and insight through personalized tarot readings that illuminate your journey ahead",
      primaryCTA: "Book a Reading",
      secondaryCTA: "Learn More",
      background: "linear-gradient(135deg, oklch(0.88 0.08 320 / 0.9), oklch(0.95 0.02 15 / 0.8))",
      image: "/mystical-tarot-cards-spread-on-ethereal-background.jpg",
    },
    {
      id: 2,
      headline: "Love & Relationships Guidance",
      subhead:
        "Explore matters of the heart with compassionate readings focused on love, connection, and emotional healing",
      primaryCTA: "Book Love Reading",
      secondaryCTA: "View Services",
      background: "linear-gradient(135deg, oklch(0.95 0.02 15 / 0.9), oklch(0.98 0.01 45 / 0.8))",
      image: "/romantic-tarot-cards-with-soft-pink-mystical-glow.jpg",
    },
    {
      id: 3,
      headline: "Manifest Your Dreams",
      subhead: "Unlock your potential and align with your highest purpose through transformative tarot wisdom",
      primaryCTA: "Start Your Journey",
      secondaryCTA: "Explore Readings",
      background: "linear-gradient(135deg, oklch(0.98 0.01 45 / 0.9), oklch(0.88 0.08 320 / 0.8))",
      image: "/celestial-tarot-cards-with-golden-mystical-energy.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: slides[currentSlide].background,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                className="font-serif text-4xl md:text-6xl lg:text-7xl text-accent font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].headline}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-accent/80 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].subhead}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:mystical-glow hover:scale-105 transition-all duration-300 mystical-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].primaryCTA}
                </motion.button>

                <motion.button
                  className="text-accent border-2 border-accent px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].secondaryCTA}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-accent hover:bg-background/40 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-accent hover:bg-background/40 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-accent mystical-glow scale-125" : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center text-accent/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm font-medium mb-2 rotate-90 origin-center">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-accent/40"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
    </section>
  )
}
