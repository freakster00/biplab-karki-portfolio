"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ventures", href: "#work" },
  { name: "Expertise", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32 py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl font-bold tracking-tight">BIPLAB KARKI</span>
            </motion.a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building transformative ventures that create massive impact and shape the future of Nepal&apos;s startup ecosystem.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <p className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-6">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <p className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-6">
              Connect
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs text-gray-600">
              © {currentYear} Biplab Karki. All rights reserved.
            </p>

            {/* Back to top */}
            <motion.a
              href="#home"
              className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <span className="text-xs tracking-[0.15em] uppercase">Back to top</span>
              <div className="w-8 h-8 rounded-full border border-gray-800 group-hover:border-white flex items-center justify-center transition-colors duration-300">
                <svg
                  className="w-3 h-3 rotate-[-90deg]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
