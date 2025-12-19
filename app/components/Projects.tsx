"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "TechVenture Nepal",
    category: "Tech Startup",
    description: "Revolutionizing Nepal's tech ecosystem with innovative solutions",
    year: "2024",
  },
  {
    id: 2,
    title: "GreenFuture Initiative",
    category: "Social Enterprise",
    description: "Sustainable business creating environmental and social impact",
    year: "2024",
  },
  {
    id: 3,
    title: "FinNext Solutions",
    category: "FinTech",
    description: "Disrupting financial services with cutting-edge technology",
    year: "2023",
  },
  {
    id: 4,
    title: "EduSpark Academy",
    category: "EdTech",
    description: "Transforming education accessibility across South Asia",
    year: "2023",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 text-[20rem] font-bold text-gray-100 select-none pointer-events-none"
      >
        02
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
            My Ventures
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Companies
            <br />
            <span className="text-gray-400">I&apos;ve Built</span>
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 text-lg font-medium group"
            whileHover={{ x: 10 }}
          >
            <span className="underline-animation">View All Projects</span>
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
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-gray-200 cursor-pointer"
    >
      <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Project number */}
        <motion.span
          className="text-sm text-gray-400 font-mono"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Project title */}
        <motion.h3
          className="text-2xl md:text-4xl lg:text-5xl font-bold flex-1 md:ml-8"
          animate={{ x: isHovered ? 20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        {/* Category */}
        <motion.span
          className="text-sm text-gray-500 uppercase tracking-wider"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        >
          {project.category}
        </motion.span>

        {/* Year */}
        <motion.span
          className="text-sm text-gray-400"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        >
          {project.year}
        </motion.span>

        {/* Arrow */}
        <motion.div
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
          animate={{
            backgroundColor: isHovered ? "#000" : "transparent",
            borderColor: isHovered ? "#000" : "#d1d5db",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              x: isHovered ? 5 : 0,
              color: isHovered ? "#fff" : "#000",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-gray-100 -z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}
