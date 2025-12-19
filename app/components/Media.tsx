"use client";

import { motion } from "framer-motion";

const mediaItems = [
  {
    image: "/biplab-karki-pics/shark-tank-solo.jpg",
    title: "Shark Tank Nepal",
    category: "TV Appearance",
  },
  {
    image: "/biplab-karki-pics/podcast-2.jpg",
    title: "The Biplab Show",
    category: "Podcast",
  },
  {
    image: "/biplab-karki-pics/formal-stage.jpg",
    title: "Keynote Speaker",
    category: "Events",
  },
  {
    image: "/biplab-karki-pics/anniversary-mic.jpg",
    title: "Leadership Summit",
    category: "Speaking",
  },
  {
    image: "/biplab-karki-pics/ict-award-presentation.jpg",
    title: "ICT Awards",
    category: "Recognition",
  },
  {
    image: "/biplab-karki-pics/thumb-ups.jpg",
    title: "Behind The Scenes",
    category: "Lifestyle",
  },
];

export default function Media() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
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
              Media
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">In The</span>
              <br />
              <span className="text-gray-600">Spotlight</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              From keynote speeches to podcast appearances, capturing moments that define the entrepreneurial journey.
            </p>
          </div>
        </motion.div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.p
                    className="text-xs text-gray-400 tracking-[0.2em] uppercase mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.category}
                  </motion.p>
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    className="w-4 h-4 text-white rotate-[-45deg]"
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
