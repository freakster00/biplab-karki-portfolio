"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            BK<span className="text-gray-600">.</span>
          </motion.a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors underline-animation"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Biplab Karki. All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <svg
              className="w-5 h-5 rotate-[-90deg]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
