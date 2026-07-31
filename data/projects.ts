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
];
