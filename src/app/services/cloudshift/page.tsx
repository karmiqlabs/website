import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FAQ, type QA } from "@/components/faq";

export const metadata: Metadata = {
  title: "AWS to Hetzner Migration Service — Save 60-90%",
  description:
    "Cut your AWS, GCP, or Azure bill by 60–90% with CloudShift — KarmiqLabs' cloud repatriation service. Zero downtime migration to Hetzner, Linode, or DigitalOcean.",
};

const packages = [
  {
    name: "Starter",
    price: "$8,000 – $20,000",
    timeline: "2–4 weeks",
    scope: "Up to 5 servers, basic rehost (lift & shift).",
    features: ["Infra & cost audit", "Provider setup", "DNS-level cutover", "Basic monitoring"],
  },
  {
    name: "Standard",
    price: "$25,000 – $80,000",
    timeline: "4–8 weeks",
    scope: "6–20 servers, replatform + CI/CD rebuild.",
    features: ["Everything in Starter", "CI/CD pipeline rebuild", "Staging validation", "Grafana dashboards", "30-day hypercare"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$100,000+",
    timeline: "8–16 weeks",
    scope: "20+ servers, full re-architecture + observability.",
    features: ["Everything in Standard", "Full re-architecture", "Observability stack", "Load & failover testing", "Dedicated SLA"],
  },
];

const paths = [
  ["AWS EC2 / RDS", "Hetzner Cloud + managed Postgres"],
  ["AWS S3 + CloudFront", "Hetzner Object Storage / Bunny CDN"],
  ["GCP Compute", "Linode / Akamai Cloud"],
  ["Azure App Service", "DigitalOcean App Platform"],
  ["Kubernetes (EKS/GKE)", "Self-managed k8s / Hetzner"],
];

const deliverables = [
  "Infrastructure audit & cost analysis report",
  "Migration plan with zero-downtime strategy",
  "Staging environment validation",
  "Production cutover with rollback plan",
  "30-day hypercare support",
  "Grafana / monitoring dashboard handoff",
];

const faqs: QA[] = [
  {
    q: "How much can I save by migrating from AWS to Hetzner?",
    a: "Most clients save 60–90% on infrastructure costs. A typical $5,000/month AWS bill often drops to $500–$800/month on Hetzner for equivalent workloads. Exact savings depend on your workload type.",
  },
  {
    q: "Will there be downtime during the migration?",
    a: "No. We use zero-downtime methodology: set up the new environment in parallel, validate in staging, then do a blue-green cutover with DNS-level switching. Typical planned maintenance window is under 15 minutes.",
  },
  {
    q: "How long does a cloud migration take?",
    a: "Our Starter package (up to 5 servers) typically completes in 2–4 weeks. Standard migrations (6–20 servers) take 4–8 weeks. Enterprise migrations run 8–16 weeks.",
  },
  {
    q: "Which cloud providers do you migrate to?",
    a: "Primarily Hetzner Cloud, Linode/Akamai, DigitalOcean, and OVHcloud. For GDPR-sensitive European clients we recommend Hetzner (Germany-based, EU data sovereignty).",
  },
  {
    q: "What is included in the post-migration retainer?",
    a: "24/7 infrastructure monitoring, monthly cost optimization reviews, incident response (4-hour SLA), and ongoing security updates. Retainers start at $1,500/month.",
  },
];

export default function CloudShiftPage() {
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
        eyebrow="CloudShift · Cloud Migration"
        title={
          <>
            Leave AWS. <span className="text-money">Keep 60–90%</span> of your bill.
          </>
        }
        description="80% of enterprises plan to repatriate workloads in 2026. We move your infrastructure off expensive hyperscalers to cost-optimized providers — with zero downtime."
      >
        <Button href="/contact" size="lg">
          Get a free infrastructure audit
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      {/* Packages */}
      <Section id="packages">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Packages"
            title="Pick the scope that fits"
            description="Fixed-scope pricing. We build in a 20–25% contingency so quotes don't balloon mid-project."
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
          + Post-migration retainer from $1,500/month
        </p>
      </Section>

      {/* Paths */}
      <Section className="bg-bg-soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Supported migrations"
              title="We've mapped the common paths"
              description="Every migration is validated in staging before a single byte moves in production."
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

      {/* Deliverables */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What you get"
            title="Deliverables per engagement"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {deliverables.map((d, i) => (
            <Reveal key={d} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
                <span className="mono flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">
                  {i + 1}
                </span>
                <span className="text-sm">{d}</span>
              </div>
            </Reveal>
          ))}
        </div>
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
          <h2 className="text-3xl font-bold md:text-4xl">Ready to cut your cloud bill?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Start with a free infrastructure audit. We&apos;ll show you exactly what you
            can save.
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
