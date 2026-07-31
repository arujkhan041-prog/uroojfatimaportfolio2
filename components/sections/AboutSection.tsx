"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Clock, Languages } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const details = [
  { icon: Briefcase, label: "Name", value: profile.name },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Mail, label: "Email", value: profile.email },
  { icon: Clock, label: "Experience", value: profile.experience },
  { icon: Briefcase, label: "Availability", value: profile.availability },
  { icon: Languages, label: "Languages", value: profile.languages },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <SectionHeading
        label="About Me"
        title="Crafting Digital Experiences That Convert"
        description="I help businesses worldwide establish a powerful online presence through thoughtfully built websites."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow-lg">
              <Image
                src={profile.photo}
                alt={`${profile.name} — Full-Stack Web Developer`}
                width={480}
                height={480}
                className="aspect-square w-full object-cover object-top"
                priority
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-dashed border-accent/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-3 -left-3 h-14 w-14 rounded-full border border-accent/20"
            />
          </div>
        </motion.div>

        {/* Bio & details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <GlassCard className="p-8 md:p-10">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Fast", "Responsive", "SEO-Ready", "Easy to Manage"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-center"
                  >
                    <p className="text-xs font-medium text-foreground sm:text-sm">{item}</p>
                  </motion.div>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
