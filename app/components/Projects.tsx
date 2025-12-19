"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "TechVenture Nepal",
    category: "Technology",
    description: "Revolutionizing Nepal's tech ecosystem with innovative solutions and world-class products",
    year: "2024",
    image: "/biplab-karki-pics/ict-award-presentation.jpg",
  },
  {
    id: 2,
    title: "GreenFuture Initiative",
    category: "Sustainability",
    description: "Building sustainable businesses that create environmental and social impact at scale",
    year: "2024",
    image: "/biplab-karki-pics/stage-image.webp",
  },
  {
    id: 3,
    title: "FinNext Solutions",
    category: "FinTech",
    description: "Disrupting financial services with cutting-edge blockchain and AI technology",
    year: "2023",
    image: "/biplab-karki-pics/shark-tank-2.jpg",
  },
  {
    id: 4,
    title: "EduSpark Academy",
    category: "Education",
    description: "Transforming education accessibility across South Asia through digital learning",
    year: "2023",
    image: "/biplab-karki-pics/podcast.jpeg",
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
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-0 text-[25rem] font-bold text-[#0a0a0a] select-none pointer-events-none leading-none"
      >
        02
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
              Ventures
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Companies</span>
            <br />
            <span className="text-gray-600">I&apos;ve Built</span>
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0">
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
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#"
            className="group inline-flex items-center gap-4 px-8 py-4 border border-gray-800 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm tracking-[0.15em] uppercase">View All Ventures</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-2"
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-gray-800/50 cursor-pointer"
    >
      {/* Hover Image Preview */}
      <motion.div
        className="absolute right-24 top-1/2 -translate-y-1/2 w-64 h-40 rounded-lg overflow-hidden pointer-events-none z-20 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          x: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        {/* Project number */}
        <motion.span
          className="text-xs text-gray-600 font-mono tracking-wider"
          animate={{ x: isHovered ? 10 : 0, color: isHovered ? "#ffffff" : "#4b5563" }}
          transition={{ duration: 0.3 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Project title */}
        <motion.h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold flex-1 md:ml-8 text-white"
          animate={{ x: isHovered ? 20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        {/* Category */}
        <motion.span
          className="text-xs text-gray-500 tracking-[0.2em] uppercase"
          animate={{ opacity: isHovered ? 1 : 0.6, color: isHovered ? "#ffffff" : "#6b7280" }}
        >
          {project.category}
        </motion.span>

        {/* Year */}
        <motion.span
          className="text-xs text-gray-600"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {project.year}
        </motion.span>

        {/* Arrow */}
        <motion.div
          className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center"
          animate={{
            backgroundColor: isHovered ? "#ffffff" : "transparent",
            borderColor: isHovered ? "#ffffff" : "#1f2937",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              x: isHovered ? 3 : 0,
              rotate: isHovered ? -45 : 0,
              color: isHovered ? "#000000" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-gray-900/50 -z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
}
