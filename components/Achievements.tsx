"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./Achievements.module.css";

const achievements = [
  {
    icon: "🏅",
    title: "Knight on LeetCode",
    desc: "1949 rating, top 3.3% globally. Solved 1000+ DSA problems across multiple platforms.",
  },
  {
    icon: "🏆",
    title: "EROH 2025",
    desc: "Rank 1 in college in Round 1 and AIR 1070 in Round 2 of Engineers' Ring of Honour by Naukri Campus.",
  },
  {
    icon: "🔥",
    title: "Smart India Hackathon",
    desc: "6th position among 60+ college teams. Built a Forest Fire Detection Model using AI, Pandas, and Django.",
  },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">
            <span className="section-num">05.</span> Achievements
          </h2>
        </AnimateIn>

        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <AnimateIn key={a.title} delay={i * 0.12}>
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -6,
                  borderColor: "var(--accent-dim)",
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {a.icon}
                </motion.div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
