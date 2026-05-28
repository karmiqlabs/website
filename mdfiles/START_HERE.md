# START HERE — KarmiqLabs Website Build

## What Is This Folder?

This folder contains a complete blueprint for building your company website. 
All planning, copy, SEO strategy, case studies, and agent prompts are here.

## Before You Start — 5-Minute Checklist

1. [ ] Decide on your company name (karmiqlabs or alternative from BRAND_IDENTITY.md)
2. [ ] Fill in CASE_STUDY.md with real project details from your Upwork ₹80K project
3. [ ] Decide your email (aj@karmiqlabs.com or a company email)
4. [ ] Have a GitHub account ready
5. [ ] Have a Vercel account ready (free — sign in with GitHub)

---

## How to Build the Website — Step by Step

### Step 1: Open a new Claude Code session

Paste the ORCHESTRATOR AGENT PROMPT from AGENT_PROMPTS.md into a fresh Claude Code chat.

That agent will:
- Create the Next.js project
- Set up Tailwind with your brand colors
- Build the base design system

### Step 2: Run the UI Design Agent

Open a new Claude Code session (or continue the same one).
Paste the UI_DESIGN_AGENT PROMPT from AGENT_PROMPTS.md.

This builds all the homepage section components.

### Step 3: Run the Page Builder Agent

Continue in the same session or new one.
Paste PAGE_BUILDER_AGENT PROMPT.

This assembles all pages using the components from Step 2.

### Step 4: Run the Content + SEO Agent

Paste CONTENT_SEO_AGENT PROMPT.

This finalizes all metadata, schema markup, and SEO elements.

### Step 5: Run the Feature Agent

Can run in parallel with Step 4.
Paste FEATURE_AGENT PROMPT.

This finalizes the ROI calculator and contact form.

### Step 6: Run the Test Agent

Paste TEST_AGENT PROMPT.

This finds and fixes all issues before launch.

### Step 7: Deploy

Paste DEPLOY_AGENT PROMPT and follow its instructions for Vercel + domain.

---

## Total Time Estimate

| Phase | Time |
|---|---|
| Steps 1–2 (Setup + Design) | 30–45 minutes |
| Steps 3–4 (Pages + SEO) | 45–60 minutes |
| Steps 5–6 (Features + QA) | 30–45 minutes |
| Step 7 (Deploy) | 15–20 minutes |
| **Total** | **2–3 hours** |

---

## Files in This Folder

| File | Read When |
|---|---|
| `START_HERE.md` | First — this file |
| `MASTER_PLAN.md` | For overall context and sequence |
| `BRAND_IDENTITY.md` | Name decision, colors, typography, positioning |
| `WEBSITE_SPEC.md` | Page-by-page feature spec |
| `CONTENT_COPY.md` | All website copy (pre-written, ready to use) |
| `CASE_STUDY.md` | **Fill this in before building** |
| `SEO_STRATEGY.md` | Keywords, schema markup, meta tag strategy |
| `AGENT_PROMPTS.md` | Prompts for each specialized agent |

---

## Quick Decision: Keep "karmiqlabs" or Change?

| Factor | Keep karmiqlabs | Change to alternative |
|---|---|---|
| Already on Upwork as this name | Keep | Change |
| Not yet locked in anywhere | — | Consider changing |
| How it sounds on a sales call | "kar-mik-labs" — okay | Pick something clearer |
| Domain availability | karmiqlabs.in — likely available | Check alternatives |

**If keeping:** Buy `karmiqlabs.in` on BigRock — ~₹400/year

**If changing:** Top pick is `raftshift.in` or `shiftlane.in` — says what you do, easy to spell, professional.

---

## Budget Breakdown

| Item | Cost |
|---|---|
| Domain (.in) | ₹400–500/year |
| Vercel hosting | ₹0 (free hobby tier) |
| Resend email (contact form) | ₹0 (3,000 emails/month free) |
| GitHub | ₹0 |
| **Total** | **~₹500/year** |

---

## After Launch — First 30 Days

1. Submit sitemap to Google Search Console
2. Create Clutch.co profile and add your Upwork project as a case study
3. Post on LinkedIn: "Just launched our company website" with link
4. Update your Upwork profile with the website URL
5. Reach out to 5 potential clients with your ROI calculator link
6. Write one blog post (can be on Dev.to or Medium first): "How we saved X% on cloud costs"
