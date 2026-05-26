import { Cloud, Code2, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const pains = [
  {
    icon: Cloud,
    title: "Your AWS bill grows. Your margins don't.",
    body: "80% of companies overpay for cloud by 30–60%. Every month on a hyperscaler running workloads that don't need it, you burn cash. 37signals saved $2M/year by leaving AWS.",
    stat: "80%",
    statLabel: "of enterprises plan to repatriate workloads in 2026",
  },
  {
    icon: Code2,
    title: "Your old codebase is a hiring crisis waiting to happen.",
    body: "Nobody wants to maintain PHP 5 or .NET Framework 2.x. Legacy maintenance eats 60–80% of IT budgets. Security patches dry up. Every new feature takes 3x longer than it should.",
    stat: "$1.5T",
    statLabel: "in global transactions still run on COBOL daily",
  },
];

export function PainPoints() {
  return (
    <Section className="bg-dots">
      <Reveal>
        <SectionHeading
          eyebrow="The problem"
          title="Two problems silently killing your growth"
          description="Most mid-market tech companies are bleeding money in two places at once. We fix both."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card hover className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <TrendingUp className="h-5 w-5 shrink-0 text-money" />
                <div>
                  <span className="mono text-2xl font-semibold text-money">{p.stat}</span>
                  <span className="ml-2 text-sm text-muted">{p.statLabel}</span>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
