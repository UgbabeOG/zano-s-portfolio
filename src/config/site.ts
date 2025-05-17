export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ugliest Director Zano",
  description: "The official portfolio of Ugliest Director Zano, showcasing a curated gallery of photos and videos.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "About & Contact",
      href: "/about",
    },
  ],
  socialLinks: {
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  contact: {
    email: "contact@zano.example.com", // Placeholder
    // For contact form submissions, this email is not directly used by the form action in this scaffold.
    // The form action will log to console. For a real app, you'd use a service like Resend, SendGrid, etc.
  }
}
