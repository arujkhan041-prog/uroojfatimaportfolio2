export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "nextjs-learning",
    title: "Next.js Learning & Side Projects",
    description:
      "I regularly build Next.js applications for my own learning — exploring App Router, server components, API routes, TypeScript, and Vercel deployments. These projects keep my skills sharp and help me bring modern patterns to client work.",
    highlights: ["App Router", "TypeScript", "Personal builds"],
  },
  {
    id: "modern-websites",
    title: "Modern Business Websites",
    description:
      "Designed and developed fast, responsive websites for startups and established businesses across the USA, UK, Canada, Australia, and UAE.",
    highlights: ["Next.js & WordPress", "SEO-optimized", "Mobile-first"],
  },
  {
    id: "web-apps",
    title: "Custom Web Applications",
    description:
      "Built interactive web apps with dynamic functionality, user dashboards, and seamless API integrations tailored to client workflows.",
    highlights: ["React/Next.js", "REST APIs", "Custom portals"],
  },
  {
    id: "government-portals",
    title: "Government Verification Portals",
    description:
      "Developed secure verification portals with structured data handling, compliance-focused UX, and reliable backend systems.",
    highlights: ["Secure forms", "Data validation", "Admin panels"],
  },
  {
    id: "travel-websites",
    title: "Travel & Tourism Websites",
    description:
      "Created visually rich travel platforms with booking flows, destination showcases, and optimized performance for global audiences.",
    highlights: ["Booking integration", "Multilingual ready", "Fast loading"],
  },
  {
    id: "crypto-platforms",
    title: "Crypto & Investment Platforms",
    description:
      "Built modern landing pages and platform interfaces for crypto and investment businesses with trust-focused design patterns.",
    highlights: ["Dashboard UI", "Real-time data", "Conversion-focused"],
  },
  {
    id: "ecommerce",
    title: "eCommerce Stores",
    description:
      "Launched WooCommerce and custom eCommerce solutions with product catalogs, payment integration, and inventory management.",
    highlights: ["WooCommerce", "Payment gateways", "Product management"],
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    description:
      "Crafted focused landing pages optimized for lead generation, product launches, and campaign-specific conversions.",
    highlights: ["A/B ready", "Analytics integration", "Fast deploy"],
  },
  {
    id: "client-portals",
    title: "Custom Client Portals",
    description:
      "Developed private client portals for document sharing, project tracking, and streamlined communication between teams.",
    highlights: ["Role-based access", "Secure uploads", "Real-time updates"],
  },
];
