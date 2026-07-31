"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Clock, Languages } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

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
    <section id="about" className="section-padding relative w-full max-w-full overflow-hidden">
      <SectionHeading
        label="About Me"
        title="Crafting Digital Experiences That Convert"
        description="I build for clients worldwide and grow my craft through hands-on Next.js learning projects."
      />

      {/* Mobile/tablet: photo + bio side by side. Desktop: full-width card (photo on Home) */}
      <div className="flex w-full min-w-0 max-w-full flex-col gap-8 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-1 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="w-full min-w-0 lg:hidden"
        >
          <ProfilePhoto className="max-w-[220px] sm:max-w-[260px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full min-w-0 max-w-full"
        >
          <GlassCard className="p-5 sm:p-8">
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="break-words">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="detail-chip flex min-w-0 items-start gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted">{item.label}</p>
                    <p
                      className={`text-sm font-medium text-foreground ${item.label === "Email" ? "break-all" : "break-words"}`}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {profile.highlights.map((item) => (
                <div
                  key={item}
                  className="detail-chip text-center"
                >
                  <p className="text-[10px] font-medium leading-tight text-foreground sm:text-xs">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
