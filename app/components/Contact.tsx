"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="min-h-screen py-32 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 text-[20rem] font-bold text-gray-900 select-none pointer-events-none"
      >
        04
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
          <p className="text-gray-500 tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Let&apos;s Work
            <br />
            <span className="text-gray-600">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Have a project in mind or want to collaborate? I&apos;d love to hear 
              from you. Let&apos;s create something amazing together.
            </motion.p>

            <div className="space-y-6">
              {[
                { label: "Email", value: "hello@biplabkarki.com" },
                { label: "Phone", value: "+977 98XXXXXXXX" },
                { label: "Location", value: "Kathmandu, Nepal" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map(
                  (social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="px-4 py-2 border border-gray-700 text-sm hover:bg-white hover:text-black transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Name field */}
            <div className="relative">
              <motion.label
                className="block text-sm text-gray-500 uppercase tracking-wider mb-2"
                animate={{
                  color: focusedField === "name" ? "#fff" : "#6b7280",
                }}
              >
                Your Name
              </motion.label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <motion.label
                className="block text-sm text-gray-500 uppercase tracking-wider mb-2"
                animate={{
                  color: focusedField === "email" ? "#fff" : "#6b7280",
                }}
              >
                Your Email
              </motion.label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <motion.label
                className="block text-sm text-gray-500 uppercase tracking-wider mb-2"
                animate={{
                  color: focusedField === "message" ? "#fff" : "#6b7280",
                }}
              >
                Your Message
              </motion.label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={4}
                className="w-full bg-transparent border-b-2 border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Send Message
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
              </span>
              <motion.div
                className="absolute inset-0 bg-gray-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
