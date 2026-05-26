import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function WorkPreview() {
  return (
    <Section id="work" className="bg-bg-soft">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Early days. Real proof."
          description="One client shipped, and open-source contributions to infrastructure used by Google, AWS, and Microsoft."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Client project */}
        <Reveal>
          <Link
            href="/case-studies/client-project"
            className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 md:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="mono text-xs uppercase tracking-[0.18em] text-faint">
                Client · Upwork
              </span>
              <ArrowUpRight className="h-5 w-5 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">
              Delivered a production web project, on time and on budget
            </h3>
            <p className="mt-3 text-muted">
              A ₹80,000 engagement delivered end-to-end. Full case study with the
              technical approach and results.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
              <Metric value="₹80K" label="project value" />
              <Metric value="100%" label="on-time" />
              <div className="flex items-center gap-1 text-money">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Open source */}
        <Reveal delay={0.08}>
          <Link
            href="/case-studies/open-source"
            className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 md:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="mono inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-faint">
                <GithubIcon className="h-3.5 w-3.5" /> Open source · CNCF
              </span>
              <ArrowUpRight className="h-5 w-5 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">
              3 PRs merged into the OpenTelemetry JavaScript SDK
            </h3>
            <p className="mt-3 text-muted">
              Reviewed and approved by a Grafana Labs Principal Engineer. Used by
              every Node.js app that instruments distributed tracing in production.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
              <Metric value="3" label="PRs merged" />
              <Metric value="10M+" label="monthly npm" />
              <Metric value="CNCF" label="graduated" />
            </div>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="mono text-2xl font-semibold text-fg">{value}</div>
      <div className="text-xs text-faint">{label}</div>
    </div>
  );
}
