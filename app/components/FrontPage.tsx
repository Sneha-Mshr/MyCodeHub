"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  onEnter: () => void;
}

export default function HeroSection({ onEnter }: HeroSectionProps) {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-8 md:px-16 lg:px-24">
      {/* Left side — content */}
      <div className="flex flex-col items-start text-left w-full md:w-1/2 pr-0 md:pr-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-blush text-lg tracking-widest uppercase mb-4"
        >
          Welcome to MyCodeHub
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-2 whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #d4a574, #e8a0b4, #d4a574)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I am Sneha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl mt-6 mb-12 max-w-md font-semibold"
          style={{
            background: "linear-gradient(135deg, #e8a0b4, #d4a574, #e8a0b4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(232,160,180,0.3)",
          }}
        >
          A developer who builds what works and
          <br />
          solve what matters ♡
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,165,116,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="px-8 py-4 rounded-full border border-gold/40 bg-gold/10 text-gold text-lg tracking-wide cursor-pointer backdrop-blur-sm transition-all hover:bg-gold/20"
        >
          Let's Explore MyCodeHub ✨
        </motion.button>
      </div>

      {/* Right side — photo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        className="hidden md:flex w-1/2 justify-center items-center"
      >
        <div className="relative w-56 h-56 lg:w-64 lg:h-64">
          {/* Glowing ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, #d4a574, #e8a0b4)",
              padding: "3px",
              borderRadius: "50%",
              boxShadow: "0 0 60px rgba(232,160,180,0.35), 0 0 120px rgba(212,165,116,0.2)",
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ background: "#0d0a0e" }}
            >
              <img
                src="/sneha.jpeg"
                alt="Sneha"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Floating dots */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-5 h-5 rounded-full"
            style={{ background: "#d4a574", opacity: 0.7 }}
          />
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 w-3 h-3 rounded-full"
            style={{ background: "#e8a0b4", opacity: 0.6 }}
          />
        </div>
      </motion.div>
    </section>
  );
}