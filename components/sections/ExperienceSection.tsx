"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <SectionHeading
        label="Experience"
        title="What I've Built"
        description="A diverse portfolio of web projects spanning industries and technologies."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:left-[23px] lg:block" />

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
              <div className="relative z-10 hidden shrink-0 lg:block">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="mt-6 h-3 w-3 rounded-full bg-gradient-accent shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                />
              </div>

              <div className="glass-card flex-1 p-6 md:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted"
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
