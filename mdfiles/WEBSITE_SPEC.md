# Website Specification — KarmiqLabs

## Site Architecture

```
karmiqlabs.in/
├── / (Home)
├── /services/
│   ├── /services/cloudshift
│   └── /services/stackevolve
├── /case-studies/
│   └── /case-studies/upwork-client-1
├── /about
├── /contact
├── /blog/ (Phase 2 — not in initial build)
└── /roi-calculator (or embedded on home)
```

---

## Page 1: Home (/)

### Section 1 — Navbar
- Logo left
- Links: Services (dropdown), Case Studies, About, Contact
- CTA button right: "Get Free Assessment" (links to /contact)
- Sticky on scroll, transparent → solid background
- Mobile: hamburger menu

### Section 2 — Hero
- Dark background (#0F172A)
- Badge/pill: "India's Cloud Cost Optimization Specialist"
- H1 (large, bold): "Cut Your Cloud Bill By 60%. Modernize Your Stack. Ship Faster."
- Subheadline: "We migrate infrastructure from AWS to cost-optimized alternatives and rebuild legacy codebases with modern tech — with zero downtime and AI-accelerated delivery."
- Two CTAs:
  - Primary: "Calculate My Savings" (scrolls to ROI calculator)
  - Secondary: "See Case Study" (links to case study page)
- Social proof bar below CTAs: "1 client served · ₹80,000 delivered · 0 downtime incidents"
- Subtle animated background: floating code/server icons or gradient mesh

### Section 3 — Pain Points ("The Problem")
- Headline: "Two Problems Killing Your Growth"
- Two cards side by side:
  - Card 1 (Cloud): "Your AWS bill grows every month. 80% of companies overpay by 30–60%."
  - Card 2 (Legacy): "Your old codebase slows every hire, every feature, every deployment."
- Each card has a stat callout and a micro-CTA

### Section 4 — Services Overview
- Headline: "Two Focused Services. Measurable Results."
- Two service cards:
  - **CloudShift** — Cloud Cost Migration
    - Icon: cloud with arrow
    - "Move from AWS/GCP/Azure to Hetzner, Linode, or DigitalOcean. Save 60–90%."
    - Packages: Starter ($8K), Standard ($25K–80K), Enterprise ($100K+)
    - CTA: "Learn More" → /services/cloudshift
  - **StackEvolve** — Legacy Modernization
    - Icon: stack of layers transforming
    - "Migrate from PHP 5, old Java, .NET Framework to modern, maintainable stacks."
    - Packages: Assessment ($3K–8K), Modular Lift ($15K–50K), Full Replatform ($60K+)
    - CTA: "Learn More" → /services/stackevolve

### Section 5 — ROI Calculator
- Headline: "See Your Savings in 30 Seconds"
- Input: "Your current monthly AWS/cloud bill ($)"
- Slider or dropdown: "Workload type" (web app, database, ML, general)
- Output cards (animate on input change):
  - "Estimated monthly savings: $X,XXX"
  - "Annual savings: $XX,XXX"
  - "Migration cost estimate: $XX,XXX"
  - "Break-even in: X months"
- CTA below: "Get exact numbers for your setup → Book Free Call"
- Disclaimer: "Estimates based on industry benchmarks. Actual savings may vary."

### Section 6 — Case Study Preview
- Headline: "Real Results. Real Client."
- Single featured case study card:
  - Client: [Upwork Client — anonymized or named if permitted]
  - Project type: [Web App Modernization / Migration]
  - Results: ₹80,000 project · [X weeks delivery] · [key outcome]
  - Logo/icon placeholder
  - CTA: "Read Full Case Study" → /case-studies/upwork-client-1

### Section 7 — Process ("How We Work")
- Headline: "From Audit to Launch in 4 Steps"
- Horizontal timeline (desktop) / vertical (mobile):
  1. **Discovery** — Free 1-hour call, infrastructure audit, cost analysis
  2. **Plan** — Detailed migration/modernization roadmap, fixed-scope contract
  3. **Execute** — AI-assisted delivery, daily updates, zero-downtime cutover
  4. **Handoff** — Monitoring dashboards, documentation, 30-day hypercare
- Each step has icon + 2-line description

### Section 8 — Why Us
- 4 stat cards in a 2x2 grid:
  - "60–90% typical cloud cost savings"
  - "40% faster delivery via AI tooling"
  - "0 downtime migrations — our core guarantee"
  - "2–4x margin: India cost, global quality"
- Below: "We're a boutique firm. You get senior engineers, not juniors."

### Section 9 — CTA Banner
- Dark background
- Headline: "Ready to stop overpaying for cloud?"
- Subtext: "Get a free infrastructure audit and cost analysis — no commitment."
- Button: "Book Free Call" → /contact

### Section 10 — Footer
- Logo + one-liner tagline
- Links: Services, Case Studies, About, Contact
- Social links: LinkedIn, GitHub, Upwork profile
- Copyright: "© 2025 KarmiqLabs. Built in India, serving the world."
- Location: Hyderabad / India (or wherever you're based)

---

## Page 2: /services/cloudshift

### Sections:
1. **Hero** — "CloudShift: Leave AWS. Keep Your Sanity."
   - Subtext about cloud repatriation wave, 80% of enterprises planning it
   - Stats: avg 60% savings, 37signals saved $2M/year
2. **What's Included** — Full package breakdown table (Starter/Standard/Enterprise)
3. **Supported Migrations** — Table of FROM→TO paths (AWS→Hetzner, etc.)
4. **Deliverables** — Numbered list of what they get per engagement
5. **FAQ** — 5–6 common questions with answers (JSON-LD FAQ schema)
6. **CTA** — "Start with a free infrastructure audit"

---

## Page 3: /services/stackevolve

### Sections:
1. **Hero** — "StackEvolve: Kill Your Legacy Code. Ship Faster."
   - Stats: 60% of IT budgets consumed by legacy maintenance
2. **Migration Paths** — Visual table of supported FROM→TO stacks
3. **Packages** — Assessment / Modular Lift / Full Replatform / Enterprise
4. **AI-Accelerated** — How AI tooling cuts delivery time by 40%
5. **FAQ** — 5–6 questions
6. **CTA** — "Start with a free code audit"

---

## Page 4: /case-studies/upwork-client-1

Full details in CASE_STUDY.md. Structure:
1. Client overview (anonymized if needed)
2. The Problem
3. Our Approach
4. Technical Details
5. Results (metrics, before/after)
6. Client Testimonial (if available)
7. CTA

---

## Page 5: /about

- Founder story (1–2 paragraphs — be honest, be human)
- Why this company exists (your insight about cloud cost/legacy debt)
- Current state: "Early stage, 1 client delivered, building our portfolio"
- Values: Transparency, no-bullshit pricing, senior-only delivery
- Photo (if comfortable) or illustration
- Upwork profile link

---

## Page 6: /contact

- Headline: "Let's Talk About Your Infrastructure"
- Form fields: Name, Email, Company, Monthly Cloud Bill (optional), Message
- Form submits to Resend → your email
- Response promise: "We reply within 24 hours on business days"
- Alternative: "Prefer to call? Book a 30-min call → [Calendly link]"
- Location: India (timezone note for US/EU clients)

---

## Component Library

```
components/
├── ui/
│   ├── Button.tsx          (primary, secondary, ghost variants)
│   ├── Card.tsx            (default, highlight, dark variants)
│   ├── Badge.tsx           (pill badges for tech tags)
│   ├── Section.tsx         (wrapper with consistent padding)
│   ├── StatCard.tsx        (number + label display)
│   └── Timeline.tsx        (horizontal/vertical process steps)
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── PainPoints.tsx
│   ├── Services.tsx
│   ├── ROICalculator.tsx
│   ├── CaseStudyPreview.tsx
│   ├── Process.tsx
│   ├── WhyUs.tsx
│   └── CTABanner.tsx
└── pages/
    ├── ServicePage.tsx     (reusable for cloudshift + stackevolve)
    └── CaseStudyPage.tsx   (reusable for case studies)
```

---

## Performance & SEO Requirements

- Lighthouse Performance: >90
- Lighthouse SEO: 100
- Lighthouse Accessibility: >90
- Core Web Vitals: All green
- Images: WebP format, proper alt tags
- Fonts: next/font (no CLS)
- No client-side rendering for above-the-fold content
- sitemap.xml auto-generated
- robots.txt allowing all crawlers
- OG images for each page (1200x630)
- JSON-LD schema: Organization, Service, FAQPage, BreadcrumbList

---

## Mobile Requirements

- All sections stack vertically on mobile
- Navbar collapses to hamburger
- ROI calculator is thumb-friendly (large inputs, large outputs)
- CTA buttons are full-width on mobile
- Tables scroll horizontally or collapse to cards
- Text sizes readable without zoom (min 16px body)
