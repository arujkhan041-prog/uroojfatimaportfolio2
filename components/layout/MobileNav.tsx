"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

interface MobileNavProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export function MobileNav({ activeId, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 lg:hidden">
      <div className="border-b border-white/8 bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-2.5"
            aria-label="Go to home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent font-display text-sm font-bold text-white">
              UF
            </div>
            <span className="font-display text-sm font-semibold">Urooj Fatima</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Horizontal scroll tabs */}
        <div className="overflow-x-auto px-5 pb-3 scrollbar-none">
          <div className="flex gap-2">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-accent text-white shadow-glow"
                      : "border border-white/8 bg-white/5 text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left text-lg font-medium transition-colors ${
                    activeId === item.id
                      ? "bg-accent/10 text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-accent-violet">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
