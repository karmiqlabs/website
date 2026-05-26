import { Search, FileCheck2, Rocket, Flag } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: Search,
    title: "Free audit",
    body: "One call to map your infrastructure or codebase. We surface costs, risks, and the migration path — at no charge.",
  },
  {
    icon: FileCheck2,
    title: "Fixed-scope plan",
    body: "A detailed roadmap with timeline, costs, and a zero-downtime strategy. No surprise invoices, ever.",
  },
  {
    icon: Rocket,
    title: "AI-accelerated build",
    body: "Senior engineers + AI tooling deliver 40% faster than traditional firms. Daily updates. You're never in the dark.",
  },
  {
    icon: Flag,
    title: "Monitoring & handoff",
    body: "Grafana dashboards, full documentation, and 30 days of hypercare support after go-live.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="Predictable, transparent, fast"
          description="From first call to go-live in four steps. You always know exactly where things stand."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div className="relative h-full rounded-2xl border border-border bg-surface p-6">
              <span className="mono absolute right-5 top-5 text-sm text-faint">
                0{i + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
