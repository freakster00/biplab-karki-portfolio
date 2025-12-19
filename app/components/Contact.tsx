"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const contactInfo = [
  { label: "Email", value: "hello@biplabkarki.com", href: "mailto:hello@biplabkarki.com" },
  { label: "Phone", value: "+977 98XXXXXXXX", href: "tel:+97798XXXXXXXX" },
  { label: "Location", value: "Kathmandu, Nepal", href: "#" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
];

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
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background number */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-0 text-[25rem] font-bold text-[#0a0a0a] select-none pointer-events-none leading-none"
      >
        04
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
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Let&apos;s Build</span>
            <br />
            <span className="text-gray-600">Something Great</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact info */}
          <div className="space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Looking for investment opportunities, partnerships, or want to 
              discuss the next big idea? I&apos;m always open to connecting with 
              ambitious individuals and organizations.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block group"
                >
                  <p className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-xl md:text-2xl text-white group-hover:text-gray-400 transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-4">
                Follow
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Name field */}
            <div className="relative">
              <motion.label
                className="block text-xs text-gray-600 tracking-[0.2em] uppercase mb-3"
                animate={{
                  color: focusedField === "name" ? "#ffffff" : "#4b5563",
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
                className="w-full bg-transparent border-b border-gray-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-gray-700"
                placeholder="John Doe"
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <motion.label
                className="block text-xs text-gray-600 tracking-[0.2em] uppercase mb-3"
                animate={{
                  color: focusedField === "email" ? "#ffffff" : "#4b5563",
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
                className="w-full bg-transparent border-b border-gray-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-gray-700"
                placeholder="john@example.com"
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <motion.label
                className="block text-xs text-gray-600 tracking-[0.2em] uppercase mb-3"
                animate={{
                  color: focusedField === "message" ? "#ffffff" : "#4b5563",
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
                className="w-full bg-transparent border-b border-gray-800 py-4 text-white text-lg focus:outline-none focus:border-white transition-colors duration-300 resize-none placeholder:text-gray-700"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="group relative px-10 py-5 bg-white text-black font-medium tracking-[0.1em] uppercase text-sm overflow-hidden mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-4">
                Send Message
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
              </span>
            </motion.button>
          </motion.form>
        </div>
        </div>
      </div>
    </section>
  );
}
