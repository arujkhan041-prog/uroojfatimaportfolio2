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
  const activeLabel = navItems.find((item) => item.id === activeId)?.label ?? "Home";

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/90 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <button
          onClick={() => handleNavigate("home")}
          className="flex min-w-0 items-center gap-2.5"
          aria-label="Go to home"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-accent font-display text-sm font-bold text-white">
            UF
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate font-display text-sm font-semibold">Urooj Fatima</p>
            <p className="truncate text-[10px] text-muted">{activeLabel}</p>
          </div>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-[min(100%,280px)] border-l border-white/8 bg-background/98 p-5 pt-[4.5rem] backdrop-blur-xl"
              aria-label="Mobile navigation"
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-muted">
                Navigate
              </p>
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      activeId === item.id
                        ? "bg-accent/15 text-foreground"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <span className="w-5 font-mono text-[10px] text-accent-violet">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
