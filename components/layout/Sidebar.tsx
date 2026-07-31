"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { navItems, taglines } from "@/data/navigation";
import { useRotatingText } from "@/hooks/useRotatingText";

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const { text: tagline, isAnimating } = useRotatingText(taglines);

  return (
    <aside className="relative z-20 hidden lg:flex lg:h-screen lg:w-[300px] lg:shrink-0 lg:flex-col lg:border-r lg:border-white/[0.06] lg:bg-background/40 lg:backdrop-blur-xl xl:w-[340px]">
      <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8 xl:px-8 xl:py-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <button
              onClick={() => onNavigate("home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent font-display text-base font-bold text-white shadow-glow">
                UF
                <div className="absolute inset-0 rounded-xl bg-gradient-accent opacity-0 blur-md transition-opacity group-hover:opacity-50" />
              </div>
              <div className="min-w-0 text-left">
                <p className="truncate font-display text-sm font-semibold text-foreground">
                  Urooj Fatima
                </p>
                <p
                  className={`truncate text-xs text-muted transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                >
                  {tagline}
                </p>
              </div>
            </button>
          </motion.div>

          <nav aria-label="Main navigation">
            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="nav-indicator inset-y-1.5"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`w-5 shrink-0 font-mono text-[10px] transition-colors ${isActive ? "text-accent-violet" : "text-muted/50"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{item.label}</span>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-8">
          <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-foreground hover:shadow-glow"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted/60">
            © {new Date().getFullYear()} Urooj Fatima
          </p>
        </div>
      </div>
    </aside>
  );
}
