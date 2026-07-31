export type ProjectCategory =
  | "all"
  | "wordpress"
  | "nextjs"
  | "ecommerce"
  | "portals";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "portals", label: "Portals" },
];

export const projects: Project[] = [
  // Live client projects
  {
    id: "thesafetycerts",
    title: "The Safety Certs",
    description:
      "UK-based safety certification platform with course listings, verification flows, and a professional business portal for compliance training.",
    category: "portals",
    tags: ["WordPress", "Elementor", "SEO"],
    image: "/projects/thesafetycerts.svg",
    liveUrl: "https://thesafetycerts.co.uk/",
    featured: true,
  },
  {
    id: "veroke",
    title: "Veroke",
    description:
      "Corporate software company website with modern branding, service showcases, and conversion-focused landing pages for international clients.",
    category: "wordpress",
    tags: ["WordPress", "Custom Theme", "Responsive"],
    image: "/projects/veroke.svg",
    liveUrl: "https://veroke.com/",
    featured: true,
  },
  {
    id: "carepine",
    title: "Carepine",
    description:
      "Healthcare-focused business website with clean UI, service pages, and optimized performance for patient-facing digital presence.",
    category: "wordpress",
    tags: ["WordPress", "UI/UX", "SEO"],
    image: "/projects/carepine.svg",
    liveUrl: "https://www.carepine.com/",
    featured: true,
  },
  {
    id: "pestbegone",
    title: "Pest Begone Ltd",
    description:
      "UK pest control company website with service area pages, contact forms, and local SEO optimization for lead generation.",
    category: "wordpress",
    tags: ["WordPress", "Elementor Pro", "Local SEO"],
    image: "/projects/pestbegone.svg",
    liveUrl: "https://pestbegoneltd.co.uk/",
    featured: true,
  },
  {
    id: "propzgroup",
    title: "Propz Group",
    description:
      "Property group website with professional portfolio presentation, service listings, and business credibility elements for UK clients.",
    category: "wordpress",
    tags: ["WordPress", "Business Site", "Cloudflare"],
    image: "/projects/propzgroup.svg",
    liveUrl: "https://propzgroup.com/",
    featured: true,
  },
  // Additional portfolio work
  {
    id: "project-1",
    title: "Global Business Portal",
    description:
      "A secure verification portal for government and business clients with admin dashboard and document management.",
    category: "portals",
    tags: ["WordPress", "PHP", "Custom Theme"],
    image: "/projects/project-1.svg",
    featured: false,
  },
  {
    id: "project-2",
    title: "Modern SaaS Landing Page",
    description:
      "High-converting Next.js landing page with animated sections, SEO optimization, and Vercel deployment.",
    category: "nextjs",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-2.svg",
    featured: false,
  },
  {
    id: "project-3",
    title: "Premium eCommerce Store",
    description:
      "WooCommerce store with custom product filters, payment integration, and mobile-optimized checkout flow.",
    category: "ecommerce",
    tags: ["WooCommerce", "Elementor", "WordPress"],
    image: "/projects/project-3.svg",
    featured: false,
  },
  {
    id: "project-4",
    title: "Travel Experience Platform",
    description:
      "Visually stunning travel website with destination showcases, booking forms, and multilingual support.",
    category: "wordpress",
    tags: ["WordPress", "Elementor Pro", "SEO"],
    image: "/projects/project-4.svg",
    featured: false,
  },
  {
    id: "project-5",
    title: "Crypto Investment Dashboard",
    description:
      "Modern investment platform interface with real-time data visualization and trust-building design patterns.",
    category: "nextjs",
    tags: ["Next.js", "React", "REST API"],
    image: "/projects/project-5.svg",
    featured: false,
  },
  {
    id: "project-6",
    title: "Corporate WordPress Site",
    description:
      "Professional business website with custom theme, blog integration, and Cloudflare optimization.",
    category: "wordpress",
    tags: ["WordPress", "Custom Theme", "Cloudflare"],
    image: "/projects/project-1.svg",
    featured: false,
  },
];
