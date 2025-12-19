"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const featuredIn = [
  { name: "Forbes", logo: "FORBES" },
  { name: "Fortune", logo: "FORTUNE" },
  { name: "Bloomberg", logo: "BLOOMBERG" },
  { name: "TechCrunch", logo: "TECHCRUNCH" },
  { name: "Business Insider", logo: "BUSINESS INSIDER" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30 grid-pattern" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(80,80,80,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(60,60,60,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center pt-24">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-gray-500 text-sm tracking-[0.3em] uppercase">
                  Entrepreneur & Visionary
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
              >
                <span className="block text-white">Biplab</span>
                <span className="block text-white">Karki</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
              >
                Building transformative ventures that create massive impact. 
                Elevating Nepal&apos;s startup ecosystem, one vision at a time.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#work"
                  className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-gray-700 text-white font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>

            {/* Right side - Profile/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Profile image with premium styling */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img 
                    src="/biplab-karki-pics/formal-solo.jpg" 
                    alt="Biplab Karki"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 border border-gray-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 border border-gray-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
          </div>
        </div>

        {/* Featured In Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="border-t border-gray-800 py-10"
        >
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32\">           <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mb-6 text-center">
              Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {featuredIn.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm md:text-base font-semibold tracking-widest">
                    {item.logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-600 to-gray-600" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
