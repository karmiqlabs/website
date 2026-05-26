export const site = {
  name: "KarmiqLabs",
  domain: "karmiqlabs.in",
  url: "https://karmiqlabs.in",
  tagline: "Cut cloud costs. Kill tech debt.",
  description:
    "KarmiqLabs migrates infrastructure from AWS to cost-optimized providers and rebuilds legacy PHP, Java, and .NET stacks into modern architectures. India-based engineers, global quality, zero downtime.",
  email: "ravitheja4531@gmail.com",
  location: "India · serving clients worldwide",
  socials: {
    linkedin: "https://www.linkedin.com/company/karmiqlabs",
    github: "https://github.com/karmiqlabs",
    upwork: "#",
  },
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
] as const;
