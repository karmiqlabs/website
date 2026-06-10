import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTABanner() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="glow-mesh relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border-strong bg-bg-soft px-6 py-16 text-center md:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_80%_at_50%_50%,black,transparent)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Stop overpaying for cloud, legacy maintenance, and manual payroll
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Book a free 30-minute audit. We&apos;ll map your cloud savings, legacy
              modernization path, or payroll automation opportunity — no fluff, no
              sales pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book free audit call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services/cloudshift" size="lg" variant="outline">
                Explore services
              </Button>
            </div>
            <p className="mono mt-6 text-xs text-faint">
              Replies within 24 hours · Based in India (IST), available for US/EU calls
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
