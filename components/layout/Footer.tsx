import { socialLinks } from "@/data/social";
import { navItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-surface/40 px-4 py-8 backdrop-blur-sm sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-sm font-semibold text-foreground">
              Urooj Fatima
            </p>
            <p className="mt-1 text-xs text-muted">
              Full-Stack Web Developer · Pakistan
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted transition-colors hover:text-foreground"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Urooj Fatima. All rights reserved. Built
            with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
