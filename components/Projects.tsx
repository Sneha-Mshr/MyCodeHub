"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "CodeHolic",
    desc: "A role-based EdTech platform for 500+ students with course enrollment, instructor content management, admin controls, Razorpay payments, and 5+ real-time dashboards powered by Redux.",
    tags: ["MongoDB", "Express", "React", "Redux", "Cloudinary", "Razorpay"],
    live: "https://codeholic-ivory.vercel.app/",
    github: "https://github.com/Sneha-Mshr/Codeholic",
  },
  {
    title: "ProTrack",
    desc: "A MERN-stack student performance tracker with Codeforces API integration, interactive data visualizations, cron-based daily sync, and automated Nodemailer re-engagement emails.",
    tags: ["MongoDB", "Express", "React", "Tailwind", "Shadcn", "Cron"],
    live: "https://pro-track-theta.vercel.app/",
    github: "https://github.com/Sneha-Mshr/ProTrack",
  },
  {
    title: "DocLog",
    desc: "A VS Code extension that captures in-editor notes and auto-appends markdown entries. Uses CodeLens API for inline navigation, reducing documentation time by 70%.",
    tags: ["JavaScript", "VS Code API", "CodeLens", "Markdown"],
    live: "https://marketplace.visualstudio.com/items?itemName=oitashg.live-doc-logger",
    github: "https://github.com/oitashg/DocLog",
  },
];

function FolderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">
            <span className="section-num">04.</span> Projects
          </h2>
        </AnimateIn>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.12}>
              <motion.article
                className={styles.card}
                whileHover={{
                  y: -8,
                  borderColor: "var(--accent-dim)",
                  boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.folder}>
                    <FolderIcon />
                  </div>
                  <div className={styles.links}>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalIcon />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  </div>
                </div>

                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>

                <ul className={styles.tags}>
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
