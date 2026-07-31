"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <SectionHeading
        label="Experience"
        title="What I've Built"
        description="A diverse portfolio of web projects spanning industries and technologies."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:block md:left-[15px] lg:left-[11px]" />

        <div className="space-y-6">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="relative z-10 hidden shrink-0 md:block">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="mt-6 h-3 w-3 rounded-full bg-gradient-accent shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                />
              </div>

              <div className="glass-card min-w-0 flex-1 p-5 sm:p-6 md:p-8">
                <h3 className="break-words font-display text-base font-semibold text-foreground sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="tag-chip rounded-full px-3 py-1 text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
