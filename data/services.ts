import {
  Bot,
  Globe,
  Layout,
  Palette,
  Server,
  ShoppingCart,
  Zap,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Globe;
}

export const services: Service[] = [
  {
    id: "custom-dev",
    title: "Custom Website Development",
    description:
      "Tailored WordPress and Next.js websites built from scratch — fast, scalable, and aligned with your brand identity.",
    icon: Globe,
  },
  {
    id: "ecommerce",
    title: "eCommerce & WooCommerce Stores",
    description:
      "Full-featured online stores with product management, secure checkout, and conversion-optimized shopping experiences.",
    icon: ShoppingCart,
  },
  {
    id: "portals",
    title: "Business & Government Portals",
    description:
      "Secure, structured portals for verification, document management, and internal workflows with admin dashboards.",
    icon: Server,
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Modern, intuitive interfaces with wireframes, prototypes, and pixel-perfect implementation that users love.",
    icon: Palette,
  },
  {
    id: "optimization",
    title: "Website Optimization & Migration",
    description:
      "Speed optimization, SEO improvements, and seamless migration from legacy platforms to modern stacks.",
    icon: Zap,
  },
  {
    id: "ai-dev",
    title: "AI-Assisted Development",
    description:
      "Leveraging Cursor AI workflows for faster delivery, cleaner code, and efficient iteration cycles.",
    icon: Bot,
  },
  {
    id: "hosting",
    title: "Domain, Hosting & Email Setup",
    description:
      "End-to-end setup including domain registration, hosting configuration, SSL, and professional email accounts.",
    icon: Layout,
  },
];
