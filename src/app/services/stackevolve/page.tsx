import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FAQ, type QA } from "@/components/faq";

export const metadata: Metadata = {
  title: "Legacy Stack Modernization Services",
  description:
    "Modernize legacy PHP, Java EE, or .NET Framework applications to modern stacks with StackEvolve. AI-accelerated delivery, 40% faster than traditional firms.",
};

const packages = [
  {
    name: "Assessment",
    price: "$3,000 – $8,000",
    timeline: "1–2 weeks",
    scope: "Code audit, modernization roadmap, risk report.",
    features: ["Dependency & CVE scan", "Architecture review", "Effort & cost estimate", "Prioritized roadmap"],
  },
  {
    name: "Modular Lift",
    price: "$15,000 – $50,000",
    timeline: "4–8 weeks",
    scope: "Modernize 1–2 core modules or services.",
    features: ["Everything in Assessment", "Module rewrite", "Test coverage", "Incremental rollout"],
    featured: true,
  },
  {
    name: "Full Replatform",
    price: "$60,000 – $200,000",
    timeline: "3–6 months",
    scope: "Full-stack rewrite with API-first architecture.",
    features: ["Full rewrite", "API-first design", "CI/CD + DevOps", "Data migration", "Team handoff"],
  },
];

const paths = [
  ["PHP 5.x / CodeIgniter", "Laravel 12 + React / Next.js"],
  ["Java EE / Struts / JSP", "Spring Boot + microservices"],
  [".NET Framework 2–4", ".NET 8+ / cloud-native"],
  ["jQuery + server render", "React / Vue SPA + REST/GraphQL"],
  ["Monolithic MySQL app", "Containerized microservices (k8s)"],
];

const faqs: QA[] = [
  {
    q: "How do you avoid scope creep on legacy projects?",
    a: "We always start with a paid Assessment phase. Legacy code hides surprises — the audit surfaces them before we quote the build, so the implementation contract is fixed-scope with a contingency buffer.",
  },
  {
    q: "How does AI tooling speed up modernization?",
    a: "We use AI to scan legacy code, generate documentation, map dependencies, and translate code between languages. This turns a 6-month manual migration into 6–10 weeks — without sacrificing review quality.",
  },
  {
    q: "Will the app keep running during modernization?",
    a: "Yes. We modernize incrementally — module by module behind a stable interface — so the live application keeps serving traffic while pieces are replaced underneath it.",
  },
  {
    q: "Do you work with our existing team?",
    a: "Absolutely. We hand off clean documentation, run knowledge-transfer sessions, and can train your engineers on the new stack so you're not dependent on us long-term.",
  },
];

export default function StackEvolvePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="StackEvolve · Legacy Modernization"
        title={
          <>
            Kill your <span className="text-gradient">tech debt</span>. Ship faster.
          </>
        }
        description="Legacy maintenance eats 60–80% of IT budgets. We migrate PHP, Java, and .NET codebases to modern, maintainable stacks — incrementally, with no big-bang risk."
      >
        <Button href="/contact" size="lg">
          Get a free code audit
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      {/* Paths */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Migration paths"
              title="From dead-end stacks to hireable ones"
              description="These are the moves clients pay for most. Each is done module-by-module, never a risky big-bang rewrite."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              {paths.map(([from, to], i) => (
                <div
                  key={from}
                  className={`mono grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 text-sm ${
                    i !== paths.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-faint line-through decoration-warn/60">{from}</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                  <span className="text-money">{to}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* AI accelerated */}
      <Section className="bg-bg-soft">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="mono mb-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-accent">
                  <Sparkles className="h-3.5 w-3.5" /> AI force multiplier
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  A 5-engineer team that delivers like 50
                </h3>
                <p className="mt-3 text-muted">
                  AI-assisted code translation, documentation, and dependency mapping
                  let a focused boutique do enterprise-grade modernization — 40% faster
                  than generalist firms.
                </p>
              </div>
              <div className="mono shrink-0 rounded-2xl border border-border bg-surface-2 p-6 text-center">
                <div className="text-5xl font-bold text-money">40%</div>
                <div className="mt-1 text-sm text-faint">faster ROI</div>
                <div className="mt-4 text-3xl font-bold text-accent">6–10 wk</div>
                <div className="mt-1 text-sm text-faint">vs 6 months manual</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Packages */}
      <Section>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Packages"
            title="Start small, scale up"
            description="Every engagement begins with an assessment so the build is fixed-scope and low-risk."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? "border-accent bg-surface shadow-[0_24px_60px_-30px_var(--ring)]"
                    : "border-border bg-surface"
                }`}
              >
                {p.featured && (
                  <span className="mono mb-3 w-fit rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mono mt-2 text-2xl font-semibold text-money">{p.price}</div>
                <div className="mono mt-1 text-sm text-faint">{p.timeline}</div>
                <p className="mt-4 text-sm text-muted">{p.scope}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-money" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Start here
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mono mt-6 text-center text-sm text-faint">
          Enterprise portfolio modernization: $200,000+ · 6–18 months
        </p>
      </Section>

      {/* FAQ */}
      <Section className="bg-bg-soft">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Tech debt slowing you down?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Start with a free code audit. We&apos;ll map the risks and a modernization
            path.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Book free audit
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
