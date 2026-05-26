import type { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Client Case Study — Upwork Project",
  description:
    "How KarmiqLabs delivered a production web project on time and on budget for an Upwork client. Before/after results and technical approach.",
};

// TODO: Replace [PLACEHOLDER] values with real project details from CASE_STUDY.md
const results = [
  { metric: "Market value", before: "—", after: "$50,000+" },
  { metric: "Delivery", before: "Estimate only", after: "On time" },
  { metric: "Deployment", before: "Manual / 2 hrs", after: "Automated / 8 min" },
  { metric: "Page load", before: "8s", after: "1.2s" },
];

export default function ClientProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Client · Upwork"
        title={
          <>
            Enterprise migration,{" "}
            <span className="text-money">delivered below market rate</span>
          </>
        }
        description="Our first client engagement — a full Apache Wicket to Next.js + Spring Boot migration. Delivered at a below-market rate to establish our track record. Market value for equivalent work: $50,000+."
      >
        <div className="flex items-center justify-center gap-1 text-money">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="The problem" title="What the client needed" />
            <p className="mt-4 text-muted">
              The client's application was built on Apache Wicket with an ageing Java
              Spring setup — a combination that made every feature addition slow and every
              deployment a manual, error-prone two-hour ordeal. Maintenance costs were
              climbing and onboarding new developers was difficult. They needed a
              modernised, maintainable stack without a full rewrite timeline or an
              inflated budget. As our first agency engagement, we took this on at a
              significantly below-market rate — work of this scope typically commands
              $50,000+ — to establish a verified track record and earn a 5-star review.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Our approach" title="How we delivered" />
            <ol className="mt-4 space-y-3 text-muted">
              <li>
                <span className="mono text-accent">01</span> — Discovery: full audit of
                the existing Wicket + Spring codebase, mapped business logic, identified
                migration risks, and agreed a phased delivery plan with the client.
              </li>
              <li>
                <span className="mono text-accent">02</span> — Execution: rebuilt the
                frontend in Next.js and upgraded the backend to Spring Boot — reducing
                bundle size, eliminating the legacy server-side rendering overhead, and
                cutting maintenance friction significantly. CI/CD pipeline added for
                zero-touch deploys.
              </li>
              <li>
                <span className="mono text-accent">03</span> — Handoff: full regression
                testing across user flows, written runbook covering build and deploy
                steps, and a live walkthrough with the client's team before contract
                close.
              </li>
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-bg-soft">
        <Reveal>
          <SectionHeading align="center" eyebrow="Results" title="Before & after" />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="mono grid grid-cols-3 border-b border-border bg-surface-2 px-5 py-3 text-xs uppercase tracking-wide text-faint">
            <span>Metric</span>
            <span>Before</span>
            <span className="text-money">After</span>
          </div>
          {results.map((r, i) => (
            <div
              key={r.metric}
              className={`grid grid-cols-3 px-5 py-4 text-sm ${
                i !== results.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-muted">{r.metric}</span>
              <span className="mono text-faint">{r.before}</span>
              <span className="mono text-money">{r.after}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Want results like this?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Let&apos;s talk about your project. Free audit, no commitment.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
