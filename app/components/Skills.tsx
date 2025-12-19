"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Strategic Vision", level: 98 },
  { name: "Business Development", level: 95 },
  { name: "Leadership", level: 96 },
  { name: "Fundraising & Investment", level: 92 },
  { name: "Negotiation", level: 94 },
  { name: "Market Analysis", level: 90 },
];

const technologies = [
  "Startup Strategy",
  "Venture Capital",
  "Team Building",
  "Growth Hacking",
  "Product Vision",
  "Market Disruption",
  "Social Impact",
  "Brand Building",
  "Investor Relations",
  "Scale Operations",
  "M&A Strategy",
  "Public Speaking",
  "Networking",
  "Deal Making",
  "Risk Management",
  "Innovation",
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
      className="min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 text-[20rem] font-bold text-gray-50 select-none pointer-events-none"
      >
        03
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
            Expertise
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Core
            <br />
            <span className="text-gray-400">Competencies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills bars */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-8"
            >
              Technologies I Work With
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  className="px-4 py-2 border border-gray-200 text-sm font-medium cursor-default transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
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
                  "GAME CHANGER",
                  "LEADER",
                ].map((word, index) => (
                  <span
                    key={`${i}-${index}`}
                    className="text-6xl md:text-8xl font-bold mx-8 text-transparent"
                    style={{ WebkitTextStroke: "1px #e5e5e5" }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
