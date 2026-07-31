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
    <aside className="hidden lg:flex lg:w-[32%] lg:min-w-[280px] lg:max-w-[380px] lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:z-40">
      <div className="flex h-full flex-col justify-between px-8 py-10 xl:px-12">
        {/* Brand */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <button
              onClick={() => onNavigate("home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent font-display text-lg font-bold text-white shadow-glow">
                UF
                <div className="absolute inset-0 rounded-xl bg-gradient-accent opacity-0 blur-md transition-opacity group-hover:opacity-50" />
              </div>
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-foreground">
                  Urooj Fatima
                </p>
                <p
                  className={`text-xs text-muted transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                >
                  {tagline}
                </p>
              </div>
            </button>
          </motion.div>

          {/* Navigation */}
          <nav className="relative" aria-label="Main navigation">
            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`group relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
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
                        className={`font-mono text-[10px] transition-colors ${isActive ? "text-accent-violet" : "text-muted/50"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-gradient-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Social links */}
        <div>
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-foreground hover:shadow-glow"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted/60">
            © {new Date().getFullYear()} Urooj Fatima
          </p>
        </div>
      </div>
    </aside>
  );
}
