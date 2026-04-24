"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Starfield from "./components/Starfield";
import HeroSection from "./components/FrontPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import SecretMessage from "./components/SecretMessage";
import MusicToggle from "./components/MusicToggle";
import Footer from "./components/Footer";
// import ToolsUsed from "./components/ToolsUsed";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Starfield />
      <MusicToggle />

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative z-10 pt-20">

              {/* ── Intro / About Sneha Section ── */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="px-6 mb-20 max-w-3xl mx-auto"
              >
                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-wrap gap-2 justify-center mb-8"
                >
                  {[
                    "Always Cooking Something",
                    "Problem Solver",
                    "Full-Stack Developer",
                    "Got Ideas, Let's Build",
                  ].map((tag, i) => (
                    <span
                      key={tag}
                      className="text-xs tracking-widest uppercase px-3 py-1 rounded-sm border"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        borderColor: "rgba(212, 165, 116, 0.3)",
                        color: "rgba(212, 165, 116, 0.75)",
                        background: "rgba(212, 165, 116, 0.07)",
                        fontFamily: "monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.9 }}
                  className="text-center mb-6"
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "rgba(232, 160, 180, 0.5)", fontFamily: "monospace" }}
                  >
                    Hello, universe - she is
                  </p>
                  <h3
                    className="text-6xl md:text-7xl font-bold leading-none tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, #d4a574 0%, #e8a0b4 50%, #d4a574 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Sneha
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full ml-1 align-top mt-3"
                      style={{
                        background: "#e8a0b4",
                        boxShadow: "0 0 8px #e8a0b4, 0 0 20px rgba(232,160,180,0.4)",
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                    />
                  </h3>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.9 }}
                  className="text-center text-lg md:text-xl mb-2 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  She builds{" "}
                  <span style={{ color: "#d4a574", fontWeight: 600 }}>
                    scalable things that actually work
                  </span>{" "}
                  and occasionally things that probably shouldn't exist yet.
                </motion.p>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.7 }}
                  className="my-8 flex justify-center"
                >
                  <div
                    className="h-px w-16"
                    style={{
                      background: "linear-gradient(90deg, transparent, #d4a574, #e8a0b4, transparent)",
                    }}
                  />
                </motion.div>

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.9 }}
                  className="text-center leading-loose"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px" }}
                >
                 Started with curiosity, stayed for the craft. I pick up hard
                  problems the way some people collect hobbies, obsessively.
                  DSA-strong, project-driven, and genuinely excited by ideas
                  that sound impossible until suddenly they're not. If you need
                  someone who can keep up with your wildest{" "}
                  <span style={{ color: "rgba(232,160,180,0.7)", fontStyle: "italic" }}>
                    "what if?"
                  </span>{" "}
                  I'm in.
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.9 }}
                  className="flex justify-center gap-12 mt-10"
                >
                  {[
                    { num: "∞", label: "ideas / day" },
                    { num: "NIT", label: "Hamirpur" },
                    { num: "∞", label: "always curious" },
                  ].map(({ num, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <span
                        className="text-3xl font-bold leading-none"
                        style={{ color: "#d4a574" }}
                      >
                        {num}
                      </span>
                      <span
                        className="text-xs tracking-widest uppercase"
                        style={{
                          color: "rgba(212,165,116,0.45)",
                          fontFamily: "monospace",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.section>

              {/* ── Divider ── */}
              <div className="my-16 flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div>

              < Projects />

              <div className="my-16 flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div>

              < Skills />

              <div className="my-16 flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent" />
              </div>

              < CodingProfiles />

              <div className="my-16 flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent" />
              </div>

              {/* <ToolsUsed/>

              <div className="my-16 flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div> */}

              <SecretMessage />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }
      `}</style>
    </>
  );
}