"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p>Designed &amp; Built by Sneha Mishra</p>
      <p className={styles.sub}>© 2026 · Made with ❤️</p>
    </motion.footer>
  );
}
