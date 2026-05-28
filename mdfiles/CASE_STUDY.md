# Portfolio & Case Studies — KarmiqLabs

---

## Case Study 1: Upwork Client Project

### Raw Facts (Fill In What You Know)

- **Platform:** Upwork
- **Project value:**  (~$1500 USD)
- **Client location:** [US based — India / US / UK / etc.]
- **Project type:** [open source contribution to open telelmerty .]
- **Timeline:** [4 weeks]
- **Tech used:** [javacript]
- **Client review/rating:** 5 stars,timely delivery,awesome 24/7 support ]

### Case Study Draft (fill in blanks above, then run Page Builder Agent to populate)

**Headline:** "How We Delivered [Project Type] for a [Client Type] Client in [4] Weeks"

**The Problem:** [opetelemtery contrivuiton for expanding his understnadign of portfolio project ]

**Our Approach:**
1. Week 1: Discovery — [audit, assessment, or planning] repo chooisgn choose opentelemtry 
2. Week 2–X: Execution — [chose js repo since the community was highly active and got immediate responses ]
3. Final week: pr merged,documtented everyhthing adnd explained

**Results:**

| Metric | Before | After |
|---|---|---|
| [Deployment time] | [Manual, 2 hours] | [Automated CI/CD, 8 min] |
| [Monthly infra cost] | [₹XX,000] | [₹XX,000] |
| [Page load time] | [8 seconds] | [1.2 seconds] |
| Delivery timeline | [original estimate] | [actual — on time] |

**Client Feedback:**
> "[Upwork review quote]"
> — Client, Upwork · [X/5 stars]

---

## Case Study 2: Open-Source Contributions — OpenTelemetry JavaScript SDK

> **Note for website build agent:** This is a technical credibility case study, not a client engagement.
> Present it as "Open-Source Work" on the website — it demonstrates the depth of engineering skill
> behind the services. Place it in a separate "Open Source" section or a secondary case study card.
> Audience: CTOs and senior engineers evaluating whether to trust this firm with production infrastructure.

---

### Overview

**Project:** OpenTelemetry JavaScript SDK
**Repository:** github.com/open-telemetry/opentelemetry-js
**Governing Body:** Cloud Native Computing Foundation (CNCF) — a Linux Foundation project
**Project Status:** Graduated CNCF project (highest maturity level — same tier as Kubernetes, Prometheus)
**Adopted by:** Google, Microsoft, AWS, Datadog, Grafana Labs, Dynatrace, New Relic
**npm Downloads:** Tens of millions per month across SDK packages

Three pull requests merged into this project. All reviewed and approved by a Principal Software Engineer at Grafana Labs and OpenTelemetry Governance Committee member.

---

### Contribution 1 — New Feature: Declarative Trace Sampler Configuration

**Package:** `@opentelemetry/sdk-trace-base` (the core tracing package used by every Node.js distributed tracing application)

**What was built:** A new exported function, `buildSamplerFromConfig`, that bridges two previously disconnected subsystems:
- **Declarative configuration** — allows operators to configure observability via YAML/environment variables without writing code
- **Programmatic sampler API** — the runtime interface that decides which traces are recorded

Before this contribution, there was no way to construct a `Sampler` instance from a declarative configuration model. Applications using file-based configuration had no path to set sampling rules dynamically.

**Technical scope:**

| Sampler | Behavior |
|---|---|
| `always_on` | Record every trace |
| `always_off` | Drop every trace |
| `trace_id_ratio_based` | Sample a configurable percentage of traces |
| `parent_based` | Respect the parent span's sampling decision, with configurable fallbacks for all 5 parent states |

The `parent_based` sampler supports full recursive configuration — each of the 5 sub-sampler slots can itself be any of the 4 sampler types, enabling arbitrarily nested sampling policies.

**Engineering challenges resolved:**
- **Cross-package dependency design:** A `devDependency` vs `dependencies` placement issue causing `TS2307: Cannot find module` errors in downstream packages was identified and fixed by adding the correct tsconfig project reference
- **Formatting compliance:** Two Prettier violations corrected to pass automated lint enforcement
- **Merge conflict resolution:** CHANGELOG.md conflicts from concurrent community contributions resolved without losing other contributors' entries
- **Changelog placement:** Entry correctly moved from a released version to the `Unreleased` section per maintainer guidance

**Test coverage added:** 14 new unit test cases covering all 4 sampler types, nested `parent_based` configurations, default fallback behavior, and cross-validation against the existing `buildSamplerFromEnv` function.

**Reviewer:** Marylia Gutierrez — Principal Software Engineer, Grafana Labs · OpenTelemetry Governance Committee Member · Official Approver, OpenTelemetry JavaScript SDK

**Lines changed:** +164 / -1 across 8 files

---

### Contribution 2 — API Rename: Cross-SDK Naming Consistency

**Package:** `@opentelemetry/sampler-composite` (experimental)

**What was done:** Renamed a public API to align with the broader OpenTelemetry specification and other language SDKs.

- **Before:** `createComposableTraceIDRatioBasedSampler` / `ComposableTraceIDRatioBasedSampler`
- **After:** `createComposableProbabilitySampler` / `ComposableProbabilitySampler`

**Why it matters:** The OpenTelemetry SDKs in Go, Java, and Python all use "probability" rather than "trace ID ratio" to describe this sampling concept. Inconsistent naming across SDKs creates cognitive overhead for engineers working across multiple languages. This rename removes that friction.

**Scope:** Source file rename (`traceidratio.ts` → `probability.ts`), test file rename, README update, changelog entry. All 69 existing tests pass under the new naming.

**Lines changed:** +18 / -17 across 6 files

---

### Contribution 3 — New Feature: Attribute Filtering via Declarative Configuration

**Package:** `@opentelemetry/sdk-node` (the Node.js SDK bootstrapping package)

**What was built:** Wired the declarative `attribute_keys` configuration option into the runtime `ViewOptions.attributesProcessors` pipeline.

**The gap closed:** Operators could declare `included` and `excluded` attribute key filters in YAML/JSON configuration for a metric View, but those declarations were **silently ignored at runtime** — the SDK-Node bootstrapping code didn't translate them into `AttributesProcessor` instances. Metric exporters received all attributes regardless of what the config said.

**What the implementation does:**
- Translates `attribute_keys.included` → `createAllowListAttributesProcessor`
- Translates `attribute_keys.excluded` → `createDenyListAttributesProcessor`
- Wires processors into `ViewOptions.attributesProcessors` during SDK-Node initialization
- Covers include-only, exclude-only, combined, and empty configurations with unit tests

**Review notes resolved:** Tests consolidated into the existing mirror test file (per project convention), changelog entry corrected for section placement and formatting.

**Reviewer:** Marylia Gutierrez (same as Contribution 1)

---

### Ongoing Open-Source Engagement

Beyond the merged contributions, active participation on architectural issues in the OpenTelemetry community:

**JavaScript SDK:**
- Submitted implementation plan for migrating legacy environment-variable configuration to the declarative config model (a project-wide architectural change)
- Technical investigation comment on data structure trade-offs in span processor resource management
- Implementation plan posted for ProbabilitySampler (follow-up to the rename contribution)

**Python SDK (cross-language breadth):**
- Authored a bug fix for `MetricReader.force_flush` returning a meaningful bool reflecting actual export success/failure instead of always returning `True` — reached LGTM approval from a repository Approver (Mike Goldsmith, OpenTelemetry Python Approver)
- Engaged on plugin-loading architecture for declarative configuration across the Python ecosystem

---

### Why This Matters for KarmiqLabs Clients

- **Production observability is our default:** We contribute to the SDK that instruments cloud-native applications. When we set up monitoring dashboards as part of a CloudShift or StackEvolve engagement, we know this stack from the inside.
- **Code quality standard:** Every line in these contributions was reviewed by senior engineers at Grafana Labs before merge. That review bar is the standard we hold our client work to.
- **Cross-stack expertise:** Contributions span JavaScript (Node.js), Python, declarative YAML config, and CI/CD pipeline concerns — exactly the breadth needed for real migration projects.

---

## How to Use These on the Website

### For the home page "Case Study Preview" section:
Use the Upwork client project (fill in the details). This is more relatable to buyers.

### For the "About" or "Why Us" page:
Add a subsection: **"We're active open-source contributors"** with a brief paragraph and a link to the public GitHub contributions. This signals credibility to technical buyers without overwhelming non-technical decision-makers.

### For LinkedIn / content marketing:
The OpenTelemetry contributions are excellent LinkedIn posts — "I just got 3 PRs merged into a CNCF graduated project used by Google, AWS, and Microsoft" is high-signal content that attracts the right kind of CTO audience.

---

## Instructions for the Build Agent

**Case Study 1 (Upwork client):**
- Build full page at `/case-studies/upwork-client-1`
- Use [PLACEHOLDER] for any unfilled fields
- Dark hero, 2-col problem/solution, before/after stat cards, testimonial, CTA

**Case Study 2 (OpenTelemetry):**
- Build a secondary page at `/case-studies/opentelemetry-contributions`
- Frame as "Open Source Engineering Work" not a client project
- Show the 3 contributions as a timeline or 3-card grid
- Highlight: CNCF graduated project, reviewed by Grafana Labs Principal Engineer, tens of millions of monthly npm downloads
- Do NOT show exact PR numbers or the contributor's full name on the public page
- CTA: "This is the caliber of engineering behind our client work. → Book a Free Audit"
