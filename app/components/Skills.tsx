"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const expertise = [
  {
    title: "Strategic Vision",
    description: "Identifying market opportunities and building long-term business strategies that create sustainable competitive advantages.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Business Development",
    description: "Driving growth through strategic partnerships, market expansion, and innovative revenue generation models.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Leadership",
    description: "Building and inspiring high-performance teams that deliver exceptional results in fast-paced environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Investment & Fundraising",
    description: "Securing capital and building relationships with investors to fuel growth and scale operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation Management",
    description: "Fostering a culture of innovation and implementing cutting-edge solutions across all ventures.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Market Disruption",
    description: "Challenging industry norms and creating new market categories through bold, transformative approaches.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const capabilities = [
  "Venture Building",
  "Growth Strategy",
  "Team Scaling",
  "Product Vision",
  "Market Analysis",
  "Deal Making",
  "Brand Building",
  "Investor Relations",
  "M&A Strategy",
  "Public Speaking",
  "Risk Management",
  "Global Expansion",
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-0 text-[25rem] font-bold text-[#111111] select-none pointer-events-none leading-none"
      >
        03
      </motion.div>

      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gray-700" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Core</span>
            <br />
            <span className="text-gray-600">Competencies</span>
          </h2>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/30 mb-24">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#111111] transition-all duration-500 cursor-pointer"
            >
              <div className="text-gray-500 group-hover:text-white transition-colors duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-16"
        >
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mb-8">
            Capabilities
          </p>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap, index) => (
              <motion.span
                key={cap}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 border border-gray-800 text-xs font-medium text-gray-500 tracking-[0.1em] uppercase hover:text-white hover:border-gray-600 transition-all duration-300 cursor-default"
              >
                {cap}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Large Text Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  "VISIONARY",
                  "ENTREPRENEUR",
                  "DISRUPTOR",
                  "INNOVATOR",
                  "LEADER",
                ].map((word, index) => (
                  <span
                    key={`${i}-${index}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mx-8 text-transparent"
                    style={{ WebkitTextStroke: "1px #1a1a1a" }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
