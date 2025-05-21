import {
  Home,
  Image,
  Info,
  MessageSquare,
  type LucideIcon,
  icons,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ugliest Director Zano",
  description:
    "The official portfolio of Ugliest Director Zano, showcasing a curated gallery of photos and videos.",
  url: "https://zano-s-portfolio.vercel.app/", // Replace with your actual URL
  ogImage: "https://zano-s-portfolio.vercel.app/", // Replace with your OG image URL
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Gallery",
      href: "/gallery",
      icon: Image,
    },
    // { label: "Backstage", href: "/backstage", icon: Video },
    {
      label: "About ",
      href: "/about",
      icon: Info,
    },
    {
      label: "Contact ",
      href: "/about",
      icon: MessageSquare,
    },
  ] as NavItem[],

  socialLinks: {
    twitter: "https://twitter.com/example",
    whatsapp: "https://wa.me/12345678900", // Placeholder - Update with your WhatsApp link
    instagram: "https://instagram.com/example",
  },
  contact: {
    email: "contact@UglyDirectorZano@gmail.com", // Placeholder
    // For contact form submissions, this email is not directly used by the form action in this scaffold.
    // The form action will log to console. For a real app, you'd use a service like Resend, SendGrid, etc.
  },
};
