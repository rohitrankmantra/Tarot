"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react"; // Install lucide-react if not installed

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Fetch cart items count on mount
  useEffect(() => {
    async function fetchCartCount() {
      try {
        const res = await fetch("/api/cart", { credentials: "include" });
        if (!res.ok) return;
        const items = await res.json();
        const total = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
        setCartCount(total);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    }
    fetchCartCount();
  }, []);

  const navItems = [
    { name: "Live Session With Me", href: "/livesession" },
    { name: "Celtic Cross Reading", href: "/celticcross" },
    { name: "Love Reading", href: "/lovereading" },
    { name: "General Life Reading", href: "/generallife" },
    { name: "Self Love Reading", href: "/selflove" },
    { name: "Next Month Reading", href: "/nextmonth" },
    { name: "Answer to a Question", href: "/answertoquestion" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md mystical-shadow py-3 border-b border-border"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mystical-glow">
                <span className="text-primary-foreground font-serif text-xl">✦</span>
              </div>
              <span className="font-serif text-xl md:text-2xl text-foreground font-semibold">
                Tarot Time with Vi
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-1 text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Cart Icon */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href="/cart"
                  className="relative p-2 rounded-full bg-card/70 shadow-md hover:shadow-lg hover:mystical-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-6 h-6 text-primary-foreground" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                </motion.a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-card mystical-shadow z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-card-foreground hover:text-primary transition-colors font-medium text-lg"
                      onClick={toggleMobileMenu}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.a
                    href="/livesession"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:mystical-glow transition-all duration-300 mt-6 w-full shadow-md hover:shadow-lg flex justify-center items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Reading
                  </motion.a>

                  {/* Mobile Cart Link */}
                  <motion.a
                    href="/cart"
                    className="bg-card/70 mt-4 py-3 px-4 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:mystical-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-6 h-6 text-primary-foreground mr-2" />
                    Cart
                    {cartCount > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {cartCount}
                      </span>
                    )}
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
