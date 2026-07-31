"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

interface MobileNavProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export function MobileNav({ activeId, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const menuOverlay = mounted
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[200] bg-black/60 lg:hidden"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              />
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                className="fixed inset-y-0 right-0 z-[201] flex w-[min(100vw,300px)] flex-col border-l border-white/8 bg-background/95 shadow-2xl backdrop-blur-xl lg:hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <p className="font-display text-sm font-semibold text-foreground">
                    Menu
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-foreground"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted">
                    Navigate
                  </p>
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
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
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-background/80 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => handleNavigate("home")}
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Go to home"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-accent font-display text-sm font-bold text-white">
              UF
            </div>
            <span className="truncate font-display text-sm font-semibold">
              Urooj Fatima
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="scrollbar-none overflow-x-auto px-4 pb-3">
          <div className="flex w-max min-w-full gap-2">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-300 sm:px-4 ${
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
      </header>

      {menuOverlay}
    </>
  );
}
