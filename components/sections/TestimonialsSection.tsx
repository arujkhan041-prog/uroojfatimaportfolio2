"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
        description="Trusted by businesses worldwide for reliable, high-quality web development."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex flex-col p-6 md:p-8"
          >
            <Quote size={20} className="mb-4 text-accent/60" />
            <p className="flex-1 text-sm leading-relaxed text-muted md:text-base">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 border-t border-white/5 pt-4">
              <p className="text-sm font-semibold text-foreground">
                {testimonial.author}
              </p>
              <p className="mt-0.5 text-xs text-muted">
                {testimonial.role} · {testimonial.location}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
