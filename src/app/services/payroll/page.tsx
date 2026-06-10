import type { Metadata } from "next";
import { ArrowRight, Check, Cpu, Gift, ShieldCheck, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FAQ, type QA } from "@/components/faq";

export const metadata: Metadata = {
  title: "Payroll & Attendance Management System — KarmiqLabs",
  description:
    "End-to-end payroll software built in Go + Next.js. Biometric attendance tracking via ESSL integration, automated salary processing, and multi-bank payment support. 3-month free trial with full support included.",
};

const packages = [
  {
    name: "Starter",
    price: "₹2,999 / month",
    timeline: "Up to 50 employees",
    scope: "Core payroll + attendance for small teams.",
    features: [
      "Automated salary computation",
      "Attendance tracking (manual + upload)",
      "Payslip generation & email delivery",
      "Basic statutory compliance (PF, ESI, PT)",
    ],
  },
  {
    name: "Growth",
    price: "₹7,999 / month",
    timeline: "Up to 250 employees",
    scope: "Full payroll + biometric attendance integration.",
    features: [
      "Everything in Starter",
      "ESSL biometric device integration",
      "Multi-shift & overtime management",
      "Bank payment file export (NEFT/RTGS)",
      "Leave & holiday management",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    timeline: "Unlimited employees",
    scope: "Multi-branch, custom integrations & SLA.",
    features: [
      "Everything in Growth",
      "Multi-branch / multi-company",
      "Custom HR system integrations",
      "Dedicated support & SLA",
      "On-premise deployment option",
    ],
  },
];

const integrations = [
  ["ESSL Biometric Devices", "Real-time punch-in/out sync"],
  ["FingerTec / ZKTeco", "TCP/IP & USB attendance pull"],
  ["Axis Bank / HDFC / ICICI", "Direct salary disbursement files"],
  ["EPFO & ESIC Portals", "Automated PF/ESI challan generation"],
  ["Tally / QuickBooks", "Payroll journal export"],
];

const features = [
  {
    icon: Cpu,
    title: "Go-powered backend",
    desc: "High-performance Go API handles payroll computation for thousands of employees in milliseconds — no batch-job delays.",
  },
  {
    icon: Users,
    title: "Biometric attendance",
    desc: "Plug in ESSL, FingerTec, ZKTeco, or any TCP/IP attendance device. Punches sync automatically, no manual entry.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory compliance",
    desc: "Automated PF, ESI, Professional Tax, and TDS calculations. One-click challan reports ready for portal upload.",
  },
  {
    icon: Zap,
    title: "Same-day payments",
    desc: "Generate bank-ready NEFT/RTGS files or integrate directly with your bank's API to disburse salaries in one click.",
  },
];

const faqs: QA[] = [
  {
    q: "What does the 3-month free trial include?",
    a: "Everything — full platform access on your chosen plan, complete onboarding, biometric device setup, compliance configuration, and dedicated support from our team. No payment details required upfront. Billing begins only in month 4, and you can cancel before that with no obligation.",
  },
  {
    q: "Which biometric devices are supported?",
    a: "We support all ESSL models (eTimeTrackLite, IClock, etc.), FingerTec, ZKTeco, and any device that exposes a TCP/IP push SDK or ADMS protocol. We can also add support for new device brands within 2–3 weeks.",
  },
  {
    q: "Where is the data stored?",
    a: "Data is hosted on the region closest to your team by default — Mumbai for South Asia, Dubai/Bahrain for the UAE, and Frankfurt or Amsterdam for European clients. Enterprise clients can opt for on-premise deployment if required.",
  },
  {
    q: "Does it handle variable pay, OT, and deductions?",
    a: "Yes. The rule engine supports basic + HRA + TA + any custom allowances, overtime at configured multipliers, LOP deductions, advance deductions, and one-time bonuses. All configurable without code changes.",
  },
  {
    q: "Can I export to Tally or other accounting software?",
    a: "Yes. We export payroll journals in Tally XML, CSV, and JSON formats. Direct API integrations with QuickBooks and Zoho Books are available on the Growth plan.",
  },
  {
    q: "How long does onboarding take?",
    a: "Starter plan onboarding takes under 2 hours — upload your employee master and you're live. Growth plan with biometric setup typically takes 1–2 days including device configuration at your office.",
  },
  {
    q: "What statutory reports are generated?",
    a: "PF ECR, ESI monthly return, Form 16 / 12BB, salary register, payslips, Professional Tax, and TDS workings. All formatted to the latest government portal requirements.",
  },
];

export default function PayrollPage() {
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
        eyebrow="PaySync · Payroll & Attendance"
        title={
          <>
            Payroll that <span className="text-money">actually works</span> for growing teams.
          </>
        }
        description="Built in Go + Next.js from the ground up. Biometric attendance, automated compliance, and direct bank payments — no spreadsheets, no month-end panic. Start free for 3 months, full support included."
      >
        <Button href="/contact" size="lg">
          Request a demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      {/* Core features */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Platform highlights"
            title="Everything payroll in one place"
            description="From biometric punches to bank transfers — the full cycle runs inside a single platform."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="rounded-2xl border border-border bg-surface p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section className="bg-bg-soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Integrations"
              title="Connects to the hardware & software you already have"
              description="Pre-built connectors for major biometric brands, banks, and accounting software. Custom integrations delivered in days, not months."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              {integrations.map(([name, detail], i) => (
                <div
                  key={name}
                  className={`grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 text-sm ${
                    i !== integrations.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-medium">{name}</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                  <span className="mono text-money">{detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="3 months free. Then simple monthly pricing."
            description="Every plan starts with a full 3-month free trial — complete access, full support, zero payment required. Billing only begins after you've seen real results."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-money/30 bg-[color-mix(in_srgb,var(--money)_8%,transparent)] px-6 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-money/15 text-money">
              <Gift className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold">First 3 months — completely free, fully supported</p>
              <p className="mt-1 text-sm text-muted">
                Onboarding, device setup, compliance configuration, and dedicated support are all included at no cost. Payment starts only from month 4.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
                  Get started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mono mt-6 text-center text-sm text-faint">
          3-month free trial on all plans · No credit card required · Full support included
        </p>
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
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to automate payroll?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Book a 30-minute demo and we&apos;ll walk you through the full platform
            — live, with your own sample data.
          </p>
          <Button href="/contact" size="lg" className="mt-8">
            Request a demo
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
