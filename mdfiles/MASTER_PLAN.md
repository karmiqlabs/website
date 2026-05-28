# KarmiqLabs — Website Build Master Plan

## Project Overview

**Company:** KarmiqLabs (or chosen alternative — see BRAND_IDENTITY.md)
**Goal:** A production-grade, SEO-optimized Next.js 14+ marketing website for a cloud migration and legacy modernization services company targeting India mid-market + US/EU SMEs.
**Hosting:** Vercel (free tier) + cheap .in or .com domain (~₹500)
**Timeline:** ~2–3 Claude sessions to complete full build

---

## Name Decision

Current: `karmiqlabs`

**Verdict:** Usable but not ideal. The `q` creates spelling friction. Final call is yours. Alternatives in BRAND_IDENTITY.md.

---

## What We're Building

A 7-section single-domain marketing site with:
- Hero with strong positioning + ROI hook
- 2 core service offerings (CloudShift + StackEvolve)
- 1 real case study (Upwork client, ₹80K project)
- ROI calculator (AWS bill → projected savings)
- Process / How We Work section
- Contact form (with Resend or Formspree)
- SEO-first architecture (metadata, OG tags, JSON-LD schema, sitemap)

---

## Agent System

When running the build, spawn these agents in order:

### Agent 1 — Orchestrator (you, the main Claude session)
- Reads all MD files in this folder
- Spawns sub-tasks in sequence
- Tracks what's been built
- Makes architectural decisions

### Agent 2 — UI/Design Agent
- Prompt: See AGENT_PROMPTS.md → `##UI_DESIGN_AGENT`
- Responsibility: Tailwind theme, global CSS, component library (Button, Card, Badge, Section wrappers)
- Output: `components/ui/` directory + `tailwind.config.ts`

### Agent 3 — Page Builder Agent
- Prompt: See AGENT_PROMPTS.md → `##PAGE_BUILDER_AGENT`
- Responsibility: Build all Next.js pages using components from Agent 2
- Output: `app/` directory pages

### Agent 4 — Content/SEO Agent
- Prompt: See AGENT_PROMPTS.md → `##CONTENT_SEO_AGENT`
- Responsibility: All copy, metadata, JSON-LD schema, sitemap.xml, robots.txt
- Output: metadata in `app/layout.tsx`, `public/sitemap.xml`, copy finalized

### Agent 5 — Feature Agent (ROI Calculator)
- Prompt: See AGENT_PROMPTS.md → `##FEATURE_AGENT`
- Responsibility: Interactive AWS → alternative provider savings calculator
- Output: `components/ROICalculator.tsx`

### Agent 6 — Test/QA Agent
- Prompt: See AGENT_PROMPTS.md → `##TEST_AGENT`
- Responsibility: Lighthouse audit, mobile responsiveness checks, broken link scan, a11y
- Output: Report of issues to fix

---

## Build Sequence

```
Phase 1: Setup
  [ ] Init Next.js 14 project with App Router + TypeScript + Tailwind
  [ ] Install dependencies (next, react, typescript, tailwindcss, framer-motion, resend/formspree)
  [ ] Set up folder structure (see WEBSITE_SPEC.md)

Phase 2: Design System (Agent 2)
  [ ] Tailwind theme (colors, fonts, spacing)
  [ ] Global layout components (Navbar, Footer)
  [ ] Reusable UI components

Phase 3: Pages (Agent 3)
  [ ] Home page (all sections)
  [ ] /services/cloudshift
  [ ] /services/stackevolve
  [ ] /case-studies/candela-labs (or client name)
  [ ] /about
  [ ] /contact

Phase 4: Content + SEO (Agent 4)
  [ ] All metadata per page
  [ ] JSON-LD schema (Organization, Service, FAQPage)
  [ ] sitemap.xml
  [ ] robots.txt
  [ ] OG images

Phase 5: Features (Agent 5)
  [ ] ROI Calculator component
  [ ] Contact form with email sending

Phase 6: QA (Agent 6)
  [ ] Run Lighthouse
  [ ] Fix critical issues
  [ ] Verify mobile

Phase 7: Deploy
  [ ] Push to GitHub
  [ ] Connect to Vercel
  [ ] Add custom domain
```

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | SEO, SSG, fast, industry standard |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS + shadcn/ui | Fast, consistent, professional |
| Animations | Framer Motion | Subtle scroll animations |
| Icons | Lucide React | Clean, modern |
| Forms | React Hook Form + Resend (email) | Reliable, free tier |
| Hosting | Vercel | Free for hobby, instant deploys |
| Domain | Namecheap / GoDaddy .in | ~₹500/year |
| Analytics | Vercel Analytics or Plausible | Privacy-friendly |

---

## File Index in This Folder

| File | Purpose |
|---|---|
| `MASTER_PLAN.md` | This file — overall coordination |
| `BRAND_IDENTITY.md` | Name, logo concept, colors, voice |
| `WEBSITE_SPEC.md` | Page-by-page feature specification |
| `CONTENT_COPY.md` | All website copy, case study, microcopy |
| `AGENT_PROMPTS.md` | Ready-to-paste prompts for each agent |
| `CASE_STUDY.md` | The Upwork ₹80K project case study |
| `SEO_STRATEGY.md` | Keywords, meta strategy, schema |

---

## Hosting & Domain — ₹500 Budget

1. **Domain:** Buy `karmiqlabs.in` or `[newname].in` on BigRock or GoDaddy India (~₹350–500/year)
2. **Hosting:** Vercel Hobby = FREE (custom domain supported, 100GB bandwidth)
3. **Email:** Resend free tier = 3,000 emails/month free (for contact form)
4. **Total cost:** ~₹500/year (just the domain)

---

## Success Metrics (3 months post-launch)

- Google Search Console impressions > 500/month
- Core Web Vitals: all green
- At least 2 inbound leads via contact form
- Clutch/GoodFirms profile live and linked
- Lighthouse score: Performance >90, SEO 100, Accessibility >90
