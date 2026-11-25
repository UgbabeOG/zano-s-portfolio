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
  url: "https://zano-s-portfolio.vercel.app/",
  ogImage: "https://zano-s-portfolio.vercel.app/",
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
    {
      label: "About",
      href: "/about",
      icon: Info,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: MessageSquare,
    },
  ] as NavItem[],

  socialLinks: {
    instagramCinematic: "https://instagram.com/cinemagic",
    instagramLifestyle: "https://instagram.com/uglydirectorzano",
    whatsapp: "https://wa.me/2347010840838",
  },
  contact: {
    email: "zano020896@gmail.com",
    whatsapp: "07010840838",
  },
};
