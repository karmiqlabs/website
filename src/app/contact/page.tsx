import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Cloud Audit",
  description:
    "Book a free cloud infrastructure audit with KarmiqLabs. We'll tell you exactly how much you can save migrating from AWS and how long it takes.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: "Response time", value: "Within 24 hours (Mon–Fri)" },
  { icon: MapPin, label: "Based in", value: "India (IST) · available for US/EU calls" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your <span className="text-gradient">infrastructure</span>
          </>
        }
        description="Tell us about your setup and we'll tell you exactly what we'd do — and what you'd save. No commitment, no sales pressure."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mono text-xs uppercase tracking-[0.18em] text-faint">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="mt-0.5 block text-fg hover:text-accent">
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-fg">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-border bg-surface-2 p-6">
                <p className="text-sm text-muted">
                  Prefer numbers first? Try the{" "}
                  <Link href="/#roi" className="text-accent underline">
                    savings calculator
                  </Link>{" "}
                  to get a ballpark before you reach out.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
