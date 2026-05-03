"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <AnimateIn>
            <h2 className="section-title">
              <span className="section-num">06.</span> Get In Touch
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className={styles.text}>
              I&apos;m currently looking for new opportunities and my inbox is
              always open. Whether you have a question, a project idea, or just
              want to say hi — I&apos;ll do my best to get back to you!
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <motion.a
              href="mailto:snehamishra132003@gmail.com"
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Say Hello 👋
            </motion.a>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className={styles.socials}>
              <a href="https://github.com/Sneha-Mshr" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className={styles.dot}>·</span>
              <a href="https://www.linkedin.com/in/snehamishra132003/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span className={styles.dot}>·</span>
              <a href="https://leetcode.com/u/Sneha_132003/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
              <span className={styles.dot}>·</span>
              <a href="https://codolio.com/profile/Sneha_Mishra" target="_blank" rel="noopener noreferrer">
                Codolio
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
