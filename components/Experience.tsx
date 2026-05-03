"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">
            <span className="section-num">03.</span> Experience
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className={styles.timeline}>
            <div className={styles.line} />
            <div className={styles.item}>
              <motion.div
                className={styles.dot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              />
              <motion.div
                className={styles.card}
                whileHover={{ borderColor: "var(--accent-dim)" }}
              >
                <div className={styles.header}>
                  <h3>Machine Learning Intern</h3>
                  <span className={styles.date}>Jul 2025 – Aug 2025</span>
                </div>
                <p className={styles.company}>Cantilever · Remote</p>
                <ul className={styles.list}>
                  <li>
                    Implemented and deployed an NLP-based sentiment analysis
                    application using Streamlit, NLTK, and Scikit-learn.
                  </li>
                  <li>
                    Engineered a credit card fraud detection model using logistic
                    regression to classify highly imbalanced data (0.172% fraud
                    cases).
                  </li>
                  <li>
                    Integrated SMOTE to address class imbalance and evaluated
                    model performance using classification reports and confusion
                    matrices.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
