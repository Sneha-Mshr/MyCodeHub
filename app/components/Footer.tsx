"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: "https://github.com/Sneha-Mshr" },
    { label: "LinkedIn", href: "https://linkedin.com/in/snehamishra132003" },
    { label: "Email", href: "mailto:snehamishra132003@gmail.com" },
  ];

  return (
    <footer className="relative z-10 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-gold/80 text-lg mb-1 font-semibold tracking-wide">
          Sneha Mishra
        </p>
        <p className="text-blush/50 text-sm mb-6">
          Designer & Developer ✦
        </p>

        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {links.map((link) => (
              <a                  
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 text-sm hover:text-foreground/80 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="w-16 h-px bg-foreground/10 mx-auto mb-8" />

        <p className="text-foreground/30 text-sm">
          © {currentYear} Sneha. All rights reserved.
        </p>
        <p className="text-foreground/20 text-xs mt-3">
          Designed & built with ♡ and a lot of code
        </p>
      </motion.div>
    </footer>
  );
}