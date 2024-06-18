export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Features",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
