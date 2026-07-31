"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-accent"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <SectionHeading
        label="Skills"
        title="Tools & Technologies"
        description="A comprehensive toolkit for building modern, performant web experiences."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.1 + skillIndex * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
