"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  onEnter: () => void;
}

export default function HeroSection({ onEnter }: HeroSectionProps) {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
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
        className="text-5xl md:text-7xl font-bold mb-2"
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
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-blush/70 text-lg tracking-wide mb-2"
      >
        
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-xl md:text-2xl mt-6 mb-12 max-w-md text-center font-semibold"
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
       Let's Explore MyCodeHub✨
      </motion.button>

    </section>
  );
}
