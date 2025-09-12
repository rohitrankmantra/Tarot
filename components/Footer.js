"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ]

  const services = [
    { name: "Live Session", href: "#services" },
    { name: "Celtic Cross", href: "#services" },
    { name: "Love Reading", href: "#services" },
    { name: "Life Guidance", href: "#services" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/tarot.time.with.vi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-2a1 1 0 0 0-1 1V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tarot_time_with_vi/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm5.75-2a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@TarottimewithVi-vw9fe",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.116C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.57A2.99 2.99 0 0 0 .502 6.186 31.52 31.52 0 0 0 0 12a31.52 31.52 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.106 2.116C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.57a2.99 2.99 0 0 0 2.106-2.116A31.52 31.52 0 0 0 24 12a31.52 31.52 0 0 0-.502-5.814zM9.75 15.02v-6.04l6.02 3.02-6.02 3.02z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@tarot_time_with_vi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.75 2c1.54 1.36 3.54 2.21 5.75 2.29V8a8.75 8.75 0 0 1-5.75-2.12v7.75a6.75 6.75 0 1 1-6-6.7v3.08a3.75 3.75 0 1 0 3 3.67V2h3z" />
        </svg>
      ),
    },
    
  ]

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-accent-foreground rounded-full flex items-center justify-center">
                <span className="text-accent font-serif text-xl">✦</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Tarot Time with Vi</span>
            </motion.div>

            <motion.p
              className="text-accent-foreground/80 leading-relaxed mb-6 max-w-md text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Providing insightful tarot guidance and clarity for over a decade. Each reading is a sacred space for
              self-discovery, healing, and empowerment on your unique journey.
            </motion.p>

            <motion.div
              className="flex items-center space-x-2 text-accent-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@tarotwithvi.com</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-accent-foreground/80 hover:text-accent-foreground hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div>
            <h3 className="font-serif text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-accent-foreground/80 hover:text-accent-foreground hover:underline">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-accent-foreground/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center text-accent-foreground/80 hover:text-accent-foreground hover:bg-accent-foreground/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center text-sm text-accent-foreground/60">
          <p>© {currentYear} Tarot Time With Vi. All rights reserved.</p>
          {/* <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-accent-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-accent-foreground">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
