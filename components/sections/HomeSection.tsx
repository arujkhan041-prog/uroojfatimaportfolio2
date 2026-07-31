"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { stats } from "@/data/stats";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

const headline = "Hi, I'm Urooj Fatima";

export function HomeSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= headline.length) {
        setDisplayedText(headline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section-padding relative min-h-screen flex flex-col justify-center">
      <div className="relative z-10 max-w-3xl">
        <StatusBadge />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span>{displayedText}</span>
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.05em] bg-accent align-middle"
            />
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:text-xl"
        >
          Full-Stack Web Developer from Pakistan — Building fast, modern,
          SEO-friendly websites for startups & businesses across the{" "}
          <span className="text-foreground/80">USA, UK, Canada, Australia & UAE</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects
            <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/8 pt-8 md:gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.15, duration: 0.5 }}
                className="font-display text-2xl font-bold gradient-text md:text-3xl"
              >
                {stat.value}
              </motion.p>
              <p className="mt-1 text-xs text-muted md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Abstract avatar illustration */}
      <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 xl:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative h-72 w-72"
        >
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-4 rounded-full border border-dashed border-accent/20" />
          <div className="absolute inset-8 rounded-full bg-gradient-accent opacity-10 blur-2xl" />
          <div className="absolute inset-12 flex items-center justify-center rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm">
            <span className="font-display text-5xl font-bold gradient-text">UF</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
