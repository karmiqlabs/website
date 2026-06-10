import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, Users, BadgeCheck, LineChart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "KarmiqLabs is a boutique specializing in cloud cost migration, legacy tech modernization, and payroll automation. Senior engineers, fixed-scope pricing, zero downtime.",
};

const values = [
  { icon: ShieldCheck, title: "Transparent pricing", body: "Fixed-scope contracts with a contingency buffer. No surprise invoices, ever." },
  { icon: Users, title: "Senior-only delivery", body: "You work with engineers who've shipped this before — not juniors with a process doc." },
  { icon: BadgeCheck, title: "Proof over promises", body: "We lead with real metrics: before/after costs, timelines, and outcomes." },
  { icon: LineChart, title: "Built lean, delivered globally", body: "World-class quality at a fraction of US/EU boutique rates — serving clients across Asia, the Middle East, and Europe." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KarmiqLabs"
        title={
          <>
            Built by engineers tired of watching companies{" "}
            <span className="text-money">burn money</span>
          </>
        }
        description="We're a small team of infrastructure and full-stack engineers, focused on the three highest-impact moves a tech company can make — cloud migration, stack modernization, and payroll automation."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          <Reveal>
            <p>
              KarmiqLabs started from a simple frustration: companies were paying
              $10,000+ a month to AWS for workloads that would run just as well on
              Hetzner for $800. Meanwhile, others were trapped on PHP 5 and .NET
              Framework codebases nobody wanted to maintain.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              We&apos;ve delivered our first client engagement on Upwork and contributed
              three merged pull requests to the OpenTelemetry JavaScript SDK — a CNCF
              graduated project used by Google, AWS, and Microsoft. We&apos;re early, and
              we&apos;re honest about that. What we&apos;re not is generalist.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-fg">
              We&apos;re not trying to be Wipro. We&apos;re trying to be the firm that
              answers your questions, ships on time, and shows you exactly where the
              money goes.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-bg-soft">
        <Reveal>
          <SectionHeading align="center" eyebrow="How we operate" title="What we stand for" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s build something lean</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Tell us about your infrastructure or codebase. The first audit is free.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
