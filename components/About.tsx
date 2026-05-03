"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./About.module.css";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
      else setCount(target);
    }

    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span ref={ref} className={styles.statNum}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">
            <span className="section-num">01.</span> About Me
          </h2>
        </AnimateIn>

        <div className={styles.grid}>
          <AnimateIn delay={0.1}>
            <div className={styles.text}>
              <p>
                I&apos;m a B.Tech student in Electronics &amp; Communication
                Engineering at <strong>NIT Hamirpur</strong> with a deep passion
                for building things on the web. My journey spans full-stack
                development, machine learning, and competitive programming.
              </p>
              <p>
                I enjoy turning complex problems into simple, beautiful, and
                intuitive solutions. Whether it&apos;s crafting a responsive
                dashboard, engineering an ML pipeline, or solving algorithmic
                puzzles — I bring the same energy and attention to detail.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <Counter target={1000} suffix="+" />
                  <span className={styles.statLabel}>DSA Problems</span>
                </div>
                <div className={styles.stat}>
                  <Counter target={1949} />
                  <span className={styles.statLabel}>LeetCode Rating</span>
                </div>
                <div className={styles.stat}>
                  <Counter target={3} suffix="+" />
                  <span className={styles.statLabel}>Projects Shipped</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.25} direction="right">
            <div className={styles.rightCol}>
              <motion.div
                className={styles.photoWrapper}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.photoBorder} />
                <Image
                  src="/sneha.jpg.jpeg"
                  alt="Sneha Mishra"
                  width={280}
                  height={280}
                  className={styles.photo}
                  priority
                />
              </motion.div>

              <div className={styles.card}>
                {[
                  ["Name", "Sneha Mishra"],
                  ["College", "NIT Hamirpur"],
                  ["Degree", "B.Tech ECE"],
                  ["CGPA", "7.52"],
                  ["Location", "Hamirpur, HP"],
                ].map(([label, value]) => (
                  <div className={styles.row} key={label}>
                    <span className={styles.label}>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <div className={styles.row}>
                  <span className={styles.label}>Email</span>
                  <a href="mailto:snehamishra132003@gmail.com">
                    snehamishra132003@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
