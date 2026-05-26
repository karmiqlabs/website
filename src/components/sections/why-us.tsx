import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const stats = [
  { value: 90, suffix: "%", label: "typical cloud cost savings", tone: "money" },
  { value: 40, suffix: "%", label: "faster delivery via AI tooling", tone: "accent" },
  { value: 0, suffix: " min", label: "downtime — our core guarantee", tone: "money" },
  { value: 3, suffix: "x", label: "India cost efficiency vs US/EU", tone: "accent" },
] as const;

export function WhyUs() {
  return (
    <Section className="bg-dots">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Why boutique wins"
            title="Senior engineers. Not juniors with a process doc."
            description="Large SIs (TCS, Wipro, Infosys) chase Fortune 500 contracts over $1M. They ignore the mid-market. We don't — and because we're India-based, you pay a fraction of what US/EU boutiques charge for the same quality."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div
                  className={`mono text-4xl font-bold ${
                    s.tone === "money" ? "text-money" : "text-accent"
                  }`}
                >
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
