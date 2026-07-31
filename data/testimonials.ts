export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Urooj delivered our business website ahead of schedule. The site is fast, looks incredible, and our clients constantly compliment the design. Highly professional communication throughout.",
    author: "Sarah M.",
    role: "Founder, Digital Agency",
    location: "United States",
  },
  {
    id: "testimonial-2",
    quote:
      "We needed a complex verification portal and Urooj handled everything — from design to deployment. The attention to detail and responsiveness made the entire process seamless.",
    author: "James R.",
    role: "Operations Manager",
    location: "United Kingdom",
  },
  {
    id: "testimonial-3",
    quote:
      "Our WooCommerce store went from concept to live in weeks. Sales increased within the first month thanks to the optimized checkout and mobile experience. Would hire again without hesitation.",
    author: "Ahmed K.",
    role: "eCommerce Owner",
    location: "UAE",
  },
];
