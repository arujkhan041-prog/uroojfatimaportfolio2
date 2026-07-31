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
  {
    id: "project-1",
    title: "Global Business Portal",
    description:
      "A secure verification portal for government and business clients with admin dashboard and document management.",
    category: "portals",
    tags: ["WordPress", "PHP", "Custom Theme"],
    image: "/projects/project-1.svg",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "project-2",
    title: "Modern SaaS Landing Page",
    description:
      "High-converting Next.js landing page with animated sections, SEO optimization, and Vercel deployment.",
    category: "nextjs",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-2.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-3",
    title: "Premium eCommerce Store",
    description:
      "WooCommerce store with custom product filters, payment integration, and mobile-optimized checkout flow.",
    category: "ecommerce",
    tags: ["WooCommerce", "Elementor", "WordPress"],
    image: "/projects/project-3.svg",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "project-4",
    title: "Travel Experience Platform",
    description:
      "Visually stunning travel website with destination showcases, booking forms, and multilingual support.",
    category: "wordpress",
    tags: ["WordPress", "Elementor Pro", "SEO"],
    image: "/projects/project-4.svg",
    liveUrl: "#",
  },
  {
    id: "project-5",
    title: "Crypto Investment Dashboard",
    description:
      "Modern investment platform interface with real-time data visualization and trust-building design patterns.",
    category: "nextjs",
    tags: ["Next.js", "React", "REST API"],
    image: "/projects/project-5.svg",
    liveUrl: "#",
  },
  {
    id: "project-6",
    title: "Corporate WordPress Site",
    description:
      "Professional business website with custom theme, blog integration, and Cloudflare optimization.",
    category: "wordpress",
    tags: ["WordPress", "Custom Theme", "Cloudflare"],
    image: "/projects/project-1.svg",
    liveUrl: "#",
  },
];
