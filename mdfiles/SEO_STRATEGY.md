# SEO Strategy — KarmiqLabs

## Target Keywords

### Primary (High Intent, Buyer Keywords)

| Keyword | Monthly Volume | Difficulty | Priority |
|---|---|---|---|
| aws to hetzner migration | 500–1K | Low | HIGH |
| cloud migration services india | 1K–2K | Medium | HIGH |
| legacy code modernization services | 500–1K | Low | HIGH |
| php to laravel migration service | 200–500 | Low | HIGH |
| aws cost optimization services | 2K–5K | High | MEDIUM |
| cloud repatriation services | 200–500 | Low | HIGH |
| .net framework modernization | 500–1K | Low | HIGH |
| java ee to spring boot migration | 200–500 | Low | HIGH |

### Secondary (Informational — blog content, long-term)

| Keyword | Intent | Target Page |
|---|---|---|
| how to migrate from aws to hetzner | Informational | Blog post |
| aws vs hetzner cost comparison | Research | Blog post |
| how much does cloud migration cost | Research | Blog post |
| legacy software modernization cost | Research | Blog post |
| cloud repatriation statistics 2025 | Research | Blog post |
| php 5 end of life migration | Informational | Blog post |

### Local/Regional

| Keyword | Target Region | Priority |
|---|---|---|
| cloud migration company hyderabad | India | HIGH |
| software modernization company india | India | HIGH |
| cloud migration services for startups india | India | MEDIUM |

---

## On-Page SEO Implementation

### Title Tags (Format: Primary KW | Brand Name)

```
Home:           Cloud Migration & Legacy Modernization Services | KarmiqLabs
CloudShift:     AWS to Hetzner Migration Service — Save 60-90% | KarmiqLabs
StackEvolve:    Legacy Stack Modernization Services | KarmiqLabs
Case Studies:   Cloud Migration Case Studies & Results | KarmiqLabs
About:          About KarmiqLabs — India Cloud Migration Specialists
Contact:        Book Free Cloud Audit | KarmiqLabs
```

### H1 Tags (One per page, include primary keyword naturally)
- Home: "Cloud Migration & Legacy Modernization Services from India"
- CloudShift: "AWS to Hetzner Migration — Cut Your Cloud Bill by 60–90%"
- StackEvolve: "Legacy Stack Modernization: PHP, Java, .NET → Modern Architecture"
- Contact: "Book Your Free Cloud Infrastructure Audit"

### URL Structure
```
karmiqlabs.in/                           → Home
karmiqlabs.in/services/cloudshift        → CloudShift service page
karmiqlabs.in/services/stackevolve       → StackEvolve service page
karmiqlabs.in/case-studies/              → Case studies index
karmiqlabs.in/case-studies/[slug]        → Individual case study
karmiqlabs.in/about                      → About
karmiqlabs.in/contact                    → Contact
karmiqlabs.in/blog/[slug]                → Blog (Phase 2)
```

---

## JSON-LD Schema Markup

### Organization Schema (in app/layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KarmiqLabs",
  "url": "https://karmiqlabs.in",
  "description": "India-based cloud migration and legacy tech modernization specialists.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/karmiqlabs",
    "https://www.upwork.com/agencies/[your-profile]"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "CloudShift — Cloud Migration",
      "description": "Migrate from AWS, GCP, or Azure to cost-optimized cloud providers. Save 60-90% on infrastructure.",
      "url": "https://karmiqlabs.in/services/cloudshift"
    },
    {
      "@type": "Service", 
      "name": "StackEvolve — Legacy Modernization",
      "description": "Modernize legacy PHP, Java, and .NET applications to modern, maintainable architectures.",
      "url": "https://karmiqlabs.in/services/stackevolve"
    }
  ]
}
```

### FAQ Schema (CloudShift page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much can I save by migrating from AWS to Hetzner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients save 60–90% on infrastructure costs. A typical $5,000/month AWS bill can drop to $500–$800/month on Hetzner for equivalent workloads. The exact savings depend on your workload type."
      }
    },
    {
      "@type": "Question",
      "name": "Will there be downtime during the migration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We use zero-downtime migration methodology: we set up the new environment in parallel, validate thoroughly in staging, then do a blue-green cutover with DNS-level switching. Typical planned maintenance window is under 15 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a cloud migration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Starter package (up to 5 servers) typically completes in 2–4 weeks. Standard migrations (6–20 servers) take 4–8 weeks. Enterprise migrations are 8–16 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Which cloud providers do you migrate to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily migrate to Hetzner Cloud, Linode/Akamai Cloud, DigitalOcean, and OVHcloud. For GDPR-sensitive European clients, we recommend Hetzner (Germany-based, EU data sovereignty)."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the post-migration retainer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retainers include 24/7 infrastructure monitoring, monthly cost optimization reviews, incident response (SLA: 4-hour response), and ongoing security updates. Pricing starts at $1,500/month."
      }
    }
  ]
}
```

---

## sitemap.xml Template
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://karmiqlabs.in/</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://karmiqlabs.in/services/cloudshift</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://karmiqlabs.in/services/stackevolve</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://karmiqlabs.in/case-studies</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://karmiqlabs.in/about</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://karmiqlabs.in/contact</loc>
    <lastmod>2025-05-25</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## robots.txt
```
User-agent: *
Allow: /
Sitemap: https://karmiqlabs.in/sitemap.xml
```

---

## Link Building Strategy (First 6 months)

1. **Clutch.co** — Create agency profile, add the Upwork project as a review
2. **GoodFirms** — Same
3. **UpCity** — Free listing for US visibility
4. **Hetzner Partner Program** — Register as a migration partner (they list partners, free backlink)
5. **Linode/Akamai Partner Program** — Same
6. **LinkedIn Articles** — Write 1 article/month about cloud cost savings (links back to ROI calculator)
7. **Dev.to / Medium** — Technical posts on "How we migrated X from AWS to Hetzner" (links to case study)
8. **GitHub** — Open-source a small migration toolkit or cost calculator script

---

## Core Web Vitals Targets

| Metric | Target | How to Achieve |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Optimize hero image, use next/image |
| FID / INP | < 100ms | Minimize JS, use Server Components |
| CLS | < 0.1 | Reserve space for images, use next/font |
| TTFB | < 800ms | Vercel Edge Network, ISR where needed |
