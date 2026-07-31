"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TiltCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="glass-card group cursor-default p-6 md:p-8"
    >
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent/10 text-accent transition-all duration-300 ${isHovered ? "shadow-glow scale-110" : ""}`}
      >
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      <div
        className={`mt-4 h-px bg-gradient-accent transition-all duration-500 ${isHovered ? "w-full opacity-60" : "w-0 opacity-0"}`}
      />
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <SectionHeading
        label="Services"
        title="How I Can Help You"
        description="End-to-end web development services tailored for businesses that demand quality."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <TiltCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
