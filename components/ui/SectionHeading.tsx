"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-8 w-full min-w-0 max-w-full sm:mb-10 md:mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-violet sm:text-xs">
        {label}
      </span>
      <h2 className="max-w-full break-words text-balance font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-full break-words text-sm leading-relaxed text-muted sm:mt-4 sm:max-w-2xl sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
