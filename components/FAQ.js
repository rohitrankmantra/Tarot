"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const faqItems = [
    {
      question: "How does a tarot reading work?",
      answer:
        "During a reading, I connect with your energy and the cards to provide insights into your situation. For live sessions, we'll discuss your questions in real-time. For written readings, I'll provide a detailed report with card meanings and guidance tailored to your specific needs.",
    },
    {
      question: "What should I prepare for my reading?",
      answer:
        "Come with an open mind and specific questions you'd like guidance on. There's no special preparation needed, but having a quiet space for live sessions and clear intentions about what you're seeking will enhance the experience.",
    },
    {
      question: "What's the difference between live and recorded readings?",
      answer:
        "Live sessions offer real-time interaction where you can ask follow-up questions and receive immediate clarification. Written readings provide detailed, thoughtful analysis that you can revisit anytime. Both are equally insightful - it depends on your preference for interaction style.",
    },
    {
      question: "What is your refund and rescheduling policy?",
      answer:
        "I offer full refunds within 24 hours if you're not satisfied with your reading. Live sessions can be rescheduled up to 4 hours before the appointment. I want you to feel completely comfortable with your experience.",
    },
    {
      question: "How long does it take to receive my reading?",
      answer:
        "Live sessions are scheduled at your convenience. Written readings are typically delivered within 24-48 hours. Rush delivery (within 12 hours) is available for an additional fee. You'll receive email confirmation with timing details after booking.",
    },
    {
      question: "Is my information kept private and confidential?",
      answer:
        "Absolutely. Your personal information, questions, and reading details are completely confidential. I never share client information with anyone, and all communications are kept secure. Your privacy and trust are paramount to me.",
    },
    {
      question: "Can tarot predict the future with certainty?",
      answer:
        "Tarot provides guidance and insights into potential outcomes based on current energies and paths. It's a tool for self-reflection and decision-making rather than absolute prediction. The future is influenced by your choices and actions - tarot helps illuminate possibilities.",
    },
    {
      question: "What if I don't resonate with my reading?",
      answer:
        "Sometimes readings need time to unfold their meaning. However, if you feel the reading doesn't connect with your situation, please reach out within 24 hours. I'm committed to ensuring you receive valuable guidance and will work with you to address any concerns.",
    },
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Find answers to common questions about tarot readings, my process, and what you can expect from our
              session together.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl mystical-shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200"
                  onClick={() => toggleItem(index)}
                  whileHover={{ backgroundColor: "oklch(0.95 0.02 15 / 0.5)" }}
                >
                  <h3 className="font-serif text-lg md:text-xl text-card-foreground font-semibold pr-4 text-balance">
                    {item.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                    animate={{ rotate: openItems.has(index) ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed text-pretty">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-6 text-lg">Still have questions?</p>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:mystical-glow hover:scale-105 transition-all duration-300 mystical-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me Directly
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
