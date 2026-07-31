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
    <aside className="hidden lg:flex lg:w-[300px] lg:shrink-0 xl:w-[340px] lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:border-r lg:border-white/[0.06] lg:bg-background/50 lg:backdrop-blur-sm">
      <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8 xl:px-8 xl:py-10">
        {/* Brand */}
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

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="space-y-0.5">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-accent/10 text-foreground"
                          : "text-muted hover:bg-white/[0.03] hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-indicator"
                          className="absolute bottom-1.5 left-0 top-1.5 w-[3px] rounded-full bg-gradient-accent"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`w-5 shrink-0 font-mono text-[10px] ${isActive ? "text-accent-violet" : "text-muted/50"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Social links */}
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-foreground"
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
