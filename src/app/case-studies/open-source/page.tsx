import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Open-Source Engineering — OpenTelemetry JavaScript SDK",
  description:
    "Three merged contributions to the OpenTelemetry JavaScript SDK — a CNCF graduated project used by Google, AWS, and Microsoft. Reviewed by a Grafana Labs Principal Engineer.",
};

const adopters = ["Google", "Microsoft", "AWS", "Datadog", "Grafana Labs", "Dynatrace", "New Relic"];

const contributions = [
  {
    tag: "New feature",
    pkg: "@opentelemetry/sdk-trace-base",
    title: "Declarative trace sampler configuration",
    body: "Added a function that bridges declarative YAML/env configuration with the programmatic sampler API — so operators can set sampling rules without writing code. Supports all four standard samplers with fully recursive parent-based configuration.",
    points: [
      "Resolved a cross-package TS project-reference build failure",
      "14 new unit tests, cross-validated against the existing env-based path",
      "+164 / −1 across 8 files",
    ],
  },
  {
    tag: "API rename",
    pkg: "@opentelemetry/sampler-composite",
    title: "Cross-SDK naming consistency",
    body: "Renamed a public sampler API to align JavaScript with the Go, Java, and Python SDKs — using 'probability' instead of 'trace ID ratio'. Reduces cognitive load for engineers working across languages.",
    points: ["Source + test file renames", "README + changelog updated", "All 69 existing tests pass"],
  },
  {
    tag: "New feature",
    pkg: "@opentelemetry/sdk-node",
    title: "Attribute filtering via declarative config",
    body: "Wired the declarative attribute_keys option into the runtime attributes-processor pipeline. Previously, included/excluded filters declared in config were silently ignored at runtime — this closed that gap.",
    points: [
      "Translates config into allow/deny-list processors",
      "Covers include / exclude / combined / empty cases",
      "Tests consolidated per project convention",
    ],
  },
];

export default function OpenSourcePage() {
  return (
    <>
      <PageHero
        eyebrow="Open source · CNCF graduated"
        title={
          <>
            3 PRs merged into the{" "}
            <span className="text-gradient">OpenTelemetry</span> JS SDK
          </>
        }
        description="The vendor-neutral observability standard for cloud-native software — used by every Node.js app that instruments distributed tracing in production. All three contributions reviewed and approved by a Grafana Labs Principal Engineer and OpenTelemetry Governance Committee member."
      />

      {/* Stats strip */}
      <Section className="!py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["3", "PRs merged"],
            ["10M+", "monthly npm downloads"],
            ["CNCF", "graduated project"],
            ["100%", "approved on review"],
          ].map(([v, l]) => (
            <Reveal key={l}>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <div className="mono text-3xl font-bold text-accent">{v}</div>
                <div className="mt-1 text-sm text-faint">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Adopters */}
      <Section className="!pt-0">
        <Reveal>
          <p className="mono text-center text-xs uppercase tracking-[0.2em] text-faint">
            The SDK is officially adopted &amp; contributed to by
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {adopters.map((a) => (
              <Badge key={a}>{a}</Badge>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Contributions */}
      <Section className="bg-bg-soft">
        <Reveal>
          <SectionHeading
            eyebrow="The work"
            title="What was contributed"
            description="Each PR went through multiple rounds of review against the quality bar of one of the most widely deployed open-source infrastructure projects in the world."
          />
        </Reveal>
        <div className="mt-12 space-y-6">
          {contributions.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-surface p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="accent">{c.tag}</Badge>
                  <span className="mono text-xs text-faint">{c.pkg}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-muted">{c.body}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-money" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why it matters */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why it matters for clients"
              title="Production observability is our default"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 text-muted">
              <p>
                We contribute to the SDK that instruments cloud-native applications.
                When we set up monitoring as part of a migration or modernization
                engagement, we know this stack from the inside.
              </p>
              <p>
                Every line in these contributions was reviewed by senior engineers
                before merge. That review bar is the standard we hold our client work
                to — across JavaScript, Python, YAML config, and CI/CD pipelines.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">
            This is the caliber behind our client work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Put it to work on your infrastructure.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Book a free audit
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
