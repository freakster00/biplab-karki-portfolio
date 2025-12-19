"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "10+", label: "Ventures Built" },
  { number: "$5M+", label: "Revenue Generated" },
  { number: "500+", label: "Jobs Created" },
  { number: "15+", label: "Years Experience" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-0 text-[25rem] font-bold text-[#111111] select-none pointer-events-none leading-none"
      >
        01
      </motion.div>

      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gray-700" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">
              About
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Large Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="text-white">Building the future</span>
              <br />
              <span className="text-gray-500">through innovation</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m a serial entrepreneur and visionary based in Nepal, dedicated 
                to building businesses that create massive social impact and transform 
                industries. With an unstoppable drive and strategic vision, I identify 
                opportunities others miss.
              </p>
              <p className="text-gray-500 leading-relaxed">
                My journey is about more than just building companies—it&apos;s about 
                creating ecosystems that empower others, drive innovation, and leave 
                a lasting legacy. Every venture I touch is infused with purpose and 
                an unwavering commitment to excellence.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 text-white group"
                whileHover={{ x: 10 }}
              >
                <span className="text-sm tracking-[0.15em] uppercase">
                  Learn More
                </span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-2"
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
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Image & Stats */}
          <div className="space-y-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                <img 
                  src="/biplab-karki-pics/formal-stage-speaker.jpg" 
                  alt="Biplab Karki Speaking"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Image reveal animation */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-[#0a0a0a] origin-bottom"
                />
              </div>

              {/* Decorative line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-12 left-8 w-[1px] bg-gradient-to-b from-gray-700 to-transparent"
              />
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l border-gray-800 pl-6"
                >
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-500 tracking-[0.15em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
