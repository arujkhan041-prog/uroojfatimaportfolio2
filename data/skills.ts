export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 93 },
      { name: "Responsive Design", level: 96 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    id: "cms",
    title: "CMS & eCommerce",
    skills: [
      { name: "WordPress", level: 95 },
      { name: "Elementor Pro", level: 93 },
      { name: "WooCommerce", level: 90 },
      { name: "Custom Themes", level: 88 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "cPanel", level: 85 },
      { name: "Cloudflare", level: 82 },
      { name: "Vercel", level: 86 },
      { name: "Cursor AI", level: 90 },
    ],
  },
  {
    id: "other",
    title: "Other",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "SEO", level: 88 },
      { name: "Website Migration", level: 90 },
      { name: "Domain & Hosting", level: 92 },
    ],
  },
];

export const skillTags = [
  "JavaScript",
  "Next.js",
  "WordPress",
  "WooCommerce",
  "React",
  "PHP",
  "Tailwind CSS",
  "Elementor",
  "SEO",
  "UI/UX",
  "MySQL",
  "TypeScript",
  "Vercel",
  "Cursor AI",
];
