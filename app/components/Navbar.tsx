"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ventures", href: "#work" },
  { name: "Expertise", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/90 backdrop-blur-xl border-b border-gray-800/50" 
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-xl font-bold tracking-tight text-white">
            BIPLAB
          </span>
          <span className="text-xl font-light tracking-tight text-gray-500">
            KARKI
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-[13px] font-medium tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {item.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.a
          href="#contact"
          className="hidden md:block px-6 py-2.5 text-[12px] font-medium tracking-[0.15em] uppercase border border-gray-700 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Let&apos;s Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-[1px] bg-white block"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 3.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-[1px] bg-white block"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -3.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-4xl md:text-5xl font-bold tracking-tight text-white my-3 hover:text-gray-400 transition-colors"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Social links in mobile menu */}
              <motion.div
                className="flex gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
