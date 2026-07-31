"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { contactInfo } from "@/data/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <SectionHeading
        label="Contact"
        title="Let's Build Something Great Together"
        description="Currently accepting new projects from clients worldwide. Tell me about your project and I'll get back to you within 24 hours."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 md:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton
              type="submit"
              variant="primary"
              disabled={status === "loading"}
              className="w-full sm:w-auto"
            >
              {status === "loading" ? (
                "Sending..."
              ) : status === "success" ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </MagneticButton>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        </motion.div>

        {/* Direct contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="glass-card group flex items-center gap-4 p-5 transition-all hover:border-accent/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium text-foreground">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex items-center gap-4 p-5 transition-all hover:border-emerald-500/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-transform group-hover:scale-110">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <p className="text-sm font-medium text-foreground">{contactInfo.whatsapp}</p>
              </div>
            </a>

            <div className="glass-card p-5">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-emerald-400">✓</span> Currently
                accepting new projects from clients worldwide
              </p>
              <p className="mt-3 text-xs text-muted/60">
                Typical response time: within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
