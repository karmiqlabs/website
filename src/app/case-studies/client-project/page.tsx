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
  { metric: "Project value", before: "—", after: "₹80,000" },
  { metric: "Delivery", before: "[estimate]", after: "On time" },
  { metric: "Deployment", before: "[Manual / 2 hrs]", after: "[Automated / 8 min]" },
  { metric: "Page load", before: "[8s]", after: "[1.2s]" },
];

export default function ClientProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Client · Upwork"
        title={
          <>
            A production web project,{" "}
            <span className="text-money">delivered on time</span>
          </>
        }
        description="Our first client engagement — a ₹80,000 project delivered end-to-end on Upwork. Full details are being finalized; the structure below shows what the published case study will contain."
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
              [PLACEHOLDER] The client was running [old tech / expensive infrastructure]
              that was [slow / costly / hard to scale]. They needed [specific outcome]
              delivered within budget and timeline.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading eyebrow="Our approach" title="How we delivered" />
            <ol className="mt-4 space-y-3 text-muted">
              <li>
                <span className="mono text-accent">01</span> — Discovery: [audit /
                planning].
              </li>
              <li>
                <span className="mono text-accent">02</span> — Execution: [core build /
                migration work].
              </li>
              <li>
                <span className="mono text-accent">03</span> — Handoff: testing,
                documentation, delivery.
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
