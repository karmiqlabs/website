import Link from "next/link";
import { ArrowUpRight, CloudCog, Layers, Wallet } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: CloudCog,
    tag: "Cloud Migration",
    name: "CloudShift",
    href: "/services/cloudshift",
    desc: "Move from expensive hyperscalers to Hetzner, Linode, or DigitalOcean. Cut infrastructure costs by 60–90% with zero downtime.",
    points: ["AWS / GCP / Azure → cost-optimized cloud", "Zero-downtime cutover", "Grafana monitoring handoff"],
    price: "from $8,000",
  },
  {
    icon: Layers,
    tag: "Legacy Modernization",
    name: "StackEvolve",
    href: "/services/stackevolve",
    desc: "Migrate from PHP 5, Java EE, or .NET Framework to modern, maintainable stacks. AI-accelerated delivery, 40% faster.",
    points: ["PHP / Java / .NET → modern frameworks", "API-first re-architecture", "AI-assisted code translation"],
    price: "from $3,000",
  },
  {
    icon: Wallet,
    tag: "Payroll & HR Tech",
    name: "PaySync",
    href: "/services/payroll",
    desc: "Full-stack payroll platform built in Go + Next.js. Biometric attendance via ESSL, automated compliance, and one-click bank payments.",
    points: ["ESSL biometric attendance sync", "Automated PF / ESI / TDS compliance", "Direct bank salary disbursement"],
    price: "3 months free · then from ₹2,999/mo",
  },
];

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title="Three focused products. Measurable results."
          description="We don't do everything. We build and ship the highest-impact solutions for cloud infrastructure, legacy modernization, and payroll automation — exceptionally well."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <Link
              href={s.href}
              className="card-hover group block h-full rounded-2xl border border-border bg-surface p-7 md:p-9"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <div className="mono mt-6 text-xs uppercase tracking-[0.18em] text-faint">
                {s.tag}
              </div>
              <h3 className="mt-1 text-2xl font-bold">{s.name}</h3>
              <p className="mt-3 text-muted">{s.desc}</p>

              <ul className="mt-6 space-y-2.5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-money" />
                    <span className="text-muted">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mono mt-7 inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-fg">
                {s.price}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
