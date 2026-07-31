# Urooj Fatima — Portfolio Website

A premium, tab-based personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for a 2026 award-site-quality aesthetic with a signature split-screen layout.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations & transitions
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

1. Push this repo to GitHub: [github.com/UroojFatiima/uroojportfolio](https://github.com/UroojFatiima/uroojportfolio)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — no extra config needed
4. (Optional) Add `FORMSPREE_ENDPOINT` in Vercel Environment Variables for the contact form

## Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page entry
│   ├── globals.css         # Global styles & utilities
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Sidebar, MobileNav, Footer, Background
│   ├── sections/           # Home, About, Experience, Services, etc.
│   ├── ui/                 # Reusable UI (GlassCard, MagneticButton, etc.)
│   └── PortfolioLayout.tsx # Main layout orchestrator
├── data/                   # ⭐ Edit content here — no component changes needed
│   ├── navigation.ts       # Nav tabs & rotating taglines
│   ├── projects.ts         # Project cards & filter categories
│   ├── skills.ts           # Skill categories & proficiency levels
│   ├── experience.ts       # Experience timeline entries
│   ├── services.ts         # Service cards
│   ├── testimonials.ts     # Client testimonials
│   ├── social.ts           # Social links & contact info
│   └── stats.ts            # Home section stats
├── hooks/                  # useScrollSpy, useRotatingText, useMediaQuery
└── public/                 # Static assets (project images, noise texture)
```

## How to Edit Content

All content lives in `/data` files. Update these without touching components:

| File | What to edit |
|------|-------------|
| `data/projects.ts` | Project titles, descriptions, tags, live/GitHub URLs, categories |
| `data/skills.ts` | Skill names, proficiency levels (0–100), categories |
| `data/experience.ts` | Experience timeline entries |
| `data/services.ts` | Service offerings |
| `data/testimonials.ts` | Client quotes, names, roles |
| `data/social.ts` | Email, WhatsApp, GitHub, LinkedIn links |
| `data/stats.ts` | Home section stats (e.g., "50+ Projects") |
| `data/navigation.ts` | Sidebar tabs & rotating taglines |

### Adding a New Project

Edit `data/projects.ts`:

```typescript
{
  id: "project-7",
  title: "Your Project Name",
  description: "Short description of the project.",
  category: "nextjs", // wordpress | nextjs | ecommerce | portals
  tags: ["Next.js", "TypeScript"],
  image: "/projects/project-1.svg", // or add your own image to /public/projects/
  liveUrl: "https://your-live-site.com",
  githubUrl: "https://github.com/your-repo", // optional
  featured: true, // optional
}
```

### Contact Form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. Copy your form endpoint URL
3. Create `.env.local` with:
   ```
   FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
4. Add the same variable in Vercel project settings for production

Without Formspree configured, the form still works in dev (submissions are logged to the console).

## Design Features

- **Split-screen layout** — Fixed left nav (desktop) with scroll-spy active indicators
- **Mobile responsive** — Sticky top bar with horizontal tab pills + hamburger menu
- **Dark theme** — Deep `#0A0A0F` background with blue → violet accent gradient
- **Glassmorphism cards** with noise texture overlay
- **Framer Motion** — Scroll reveals, typewriter headline, tilt cards, magnetic buttons
- **Cursor glow** — Subtle spotlight effect on desktop
- **SEO ready** — Meta tags, Open Graph, semantic HTML, accessible contrast

## License

Private — © Urooj Fatima. All rights reserved.
