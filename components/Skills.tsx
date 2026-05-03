"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./Skills.module.css";

const categories = [
  {
    icon: "",
    title: "Languages",
    color: "default" as const,
    tags: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: "",
    title: "Frontend",
    color: "blue" as const,
    tags: ["ReactJS", "Redux", "HTML", "CSS", "Tailwind CSS", "Shadcn"],
  },
  {
    icon: "",
    title: "Backend",
    color: "green" as const,
    tags: ["NodeJS", "ExpressJS", "MongoDB", "AWS", "Cloudinary"],
  },
  // {
    // icon: "",
  //   title: "Machine Learning",
  //   color: "purple" as const,
  //   tags: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "CNN"],
  // },
];

const colorMap = {
  default: styles.tagDefault,
  blue: styles.tagBlue,
  green: styles.tagGreen,
  purple: styles.tagPurple,
};

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">
            <span className="section-num">02.</span> Skills &amp; Tech
          </h2>
        </AnimateIn>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <AnimateIn key={cat.title} delay={i * 0.1}>
              <motion.div
                className={styles.card}
                whileHover={{ y: -6, borderColor: "var(--accent-dim)" }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.icon}>{cat.icon}</div>
                <h3 className={styles.title}>{cat.title}</h3>
                <div className={styles.tags}>
                  {cat.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className={`${styles.tag} ${colorMap[cat.color]}`}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
