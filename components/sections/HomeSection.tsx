"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { stats } from "@/data/stats";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

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
    <section
      id="home"
      className="section-padding relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden lg:min-h-screen"
    >
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Text content */}
        <div className="relative z-10 min-w-0">
          <StatusBadge />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 font-display text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="break-words">{displayedText}</span>
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-accent align-middle"
              />
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg"
          >
            Full-Stack Web Developer from Pakistan — Building fast, modern,
            SEO-friendly websites for startups & businesses across the{" "}
            <span className="text-foreground/80">USA, UK, Canada, Australia & UAE</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-12 grid grid-cols-3 gap-3 border-t border-white/8 pt-6 sm:gap-6 sm:pt-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="min-w-0">
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.15, duration: 0.5 }}
                  className="font-display text-xl font-bold gradient-text sm:text-2xl md:text-3xl"
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-[10px] text-muted sm:text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile photo — visible on all screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <ProfilePhoto className="max-w-[240px] sm:max-w-[280px] lg:max-w-[300px]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
