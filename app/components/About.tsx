"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 text-[20rem] font-bold text-gray-50 select-none pointer-events-none"
      >
        01
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-gray-400 tracking-widest uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Building Empires
            <br />
            <span className="text-gray-400">Creating Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-8xl font-bold text-gray-200"
                >
                  BK
                </motion.div>
              </div>
              {/* Decorative overlay */}
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-black origin-right"
              />
            </div>
            {/* Decorative border */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-black -z-10"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl leading-relaxed text-gray-600"
            >
              I&apos;m a serial entrepreneur and visionary based in Nepal, 
              dedicated to building businesses that create massive social 
              impact and transform industries.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-500"
            >
              With an unstoppable drive and genius-level business acumen, I identify 
              opportunities others miss and turn bold ideas into thriving ventures. 
              My approach combines strategic thinking with relentless execution to 
              build companies that change the game.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: "10+", label: "Ventures Founded" },
                { number: "$5M+", label: "Revenue Generated" },
                { number: "500+", label: "Jobs Created" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl md:text-4xl font-bold">{stat.number}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 text-lg font-medium group"
                whileHover={{ x: 10 }}
              >
                <span className="underline-animation">Download CV</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
