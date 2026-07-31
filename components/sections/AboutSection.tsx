"use client";

import { motion } from "framer-motion";
import { skillTags } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <SectionHeading
        label="About Me"
        title="Crafting Digital Experiences That Convert"
        description="I help businesses worldwide establish a powerful online presence through thoughtfully built websites."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <GlassCard className="p-8 md:p-10">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I&apos;m <span className="font-medium text-foreground">Urooj Fatima</span>,
                a Full-Stack Web Developer based in Pakistan, specializing in building
                websites that are{" "}
                <span className="text-foreground/90">fast, responsive, modern,
                SEO-friendly, and easy to manage</span>.
              </p>
              <p>
                With experience serving clients across the USA, UK, Canada, Australia,
                and the UAE, I understand what international businesses need — reliable
                communication, clean code, and results that drive growth.
              </p>
              <p>
                Whether it&apos;s a WordPress business site, a Next.js web application,
                an eCommerce store, or a custom client portal, I bring the same level of
                dedication and craftsmanship to every project.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Fast", "Responsive", "SEO-Ready", "Easy to Manage"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center"
                  >
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </motion.div>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Skill tag cloud / abstract visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="relative flex h-full min-h-[320px] items-center justify-center">
            {/* Abstract geometric avatar */}
            <div className="relative h-64 w-64">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border border-white/5"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-2xl border border-dashed border-accent/30"
              />
              <div className="absolute inset-6 rounded-xl bg-gradient-accent opacity-20 blur-xl" />
              <div className="absolute inset-8 flex items-center justify-center rounded-xl bg-surface-elevated/80 backdrop-blur-sm">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold gradient-text">UF</p>
                  <p className="mt-2 text-xs text-muted">Developer</p>
                </div>
              </div>
            </div>

            {/* Floating skill tags */}
            {skillTags.slice(0, 8).map((tag, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  animate={{ y: [0, -5, 0] }}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-surface/80 px-3 py-1 text-[10px] font-medium text-muted backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
