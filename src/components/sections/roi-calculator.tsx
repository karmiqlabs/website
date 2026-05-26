"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const workloads = [
  { key: "web", label: "Web app", rate: 0.75 },
  { key: "db", label: "Database", rate: 0.7 },
  { key: "ml", label: "ML & compute", rate: 0.6 },
  { key: "mixed", label: "Mixed", rate: 0.72 },
] as const;

export function ROICalculator() {
  const [bill, setBill] = useState(8000);
  const [workload, setWorkload] = useState<(typeof workloads)[number]["key"]>("web");

  const rate = workloads.find((w) => w.key === workload)!.rate;
  const monthly = Math.round(bill * rate);
  const annual = monthly * 12;
  const migration = Math.round(bill * 4);
  const breakeven = monthly > 0 ? Math.max(1, Math.ceil(migration / monthly)) : 0;

  return (
    <Section id="roi" className="scroll-mt-20">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="ROI Calculator"
          title="See your cloud savings in 30 seconds"
          description="Enter your current monthly cloud bill. We'll estimate what you'd save on a cost-optimized provider."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 grid max-w-4xl overflow-hidden rounded-2xl border border-border-strong bg-surface md:grid-cols-2">
          {/* Inputs */}
          <div className="border-b border-border p-7 md:border-b-0 md:border-r md:p-9">
            <label className="mono text-xs uppercase tracking-[0.18em] text-faint">
              Monthly cloud bill (USD)
            </label>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl text-muted">$</span>
              <span className="mono text-4xl font-bold tabular-nums">
                {bill.toLocaleString("en-US")}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={50000}
              step={500}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="roi-range mt-5 w-full"
              aria-label="Monthly cloud bill"
            />
            <div className="mono mt-1 flex justify-between text-xs text-faint">
              <span>$500</span>
              <span>$50,000+</span>
            </div>

            <div className="mono mt-7 text-xs uppercase tracking-[0.18em] text-faint">
              Workload type
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {workloads.map((w) => (
                <button
                  key={w.key}
                  type="button"
                  onClick={() => setWorkload(w.key)}
                  className={`rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                    workload === w.key
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border bg-surface-2 text-muted hover:border-border-strong"
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="bg-surface-2 p-7 md:p-9">
            <div className="rounded-xl bg-money-soft p-5">
              <div className="text-sm text-money/80">Estimated annual savings</div>
              <div className="mono mt-1 text-4xl font-bold text-money">
                <Animated value={annual} prefix="$" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Metric label="Monthly savings" value={monthly} prefix="$" tone="money" />
              <Metric label="Migration cost (est.)" value={migration} prefix="$" tone="warn" />
              <Metric label="Reduction" value={Math.round(rate * 100)} suffix="%" tone="accent" />
              <Metric label="Break-even" value={breakeven} suffix=" mo" tone="accent" />
            </div>

            <Button href="/contact" className="mt-6 w-full">
              Get exact numbers — free audit
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 flex items-start gap-1.5 text-xs text-faint">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Estimates based on 2025 industry benchmarks. Actual savings depend on
              workload. Book a free audit for exact numbers.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Metric({
  label,
  value,
  prefix = "",
  suffix = "",
  tone,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  tone: "money" | "warn" | "accent";
}) {
  const color =
    tone === "money" ? "text-money" : tone === "warn" ? "text-warn" : "text-accent";
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-xs text-faint">{label}</div>
      <div className={`mono mt-1 text-xl font-semibold ${color}`}>
        <Animated value={value} prefix={prefix} suffix={suffix} />
      </div>
    </div>
  );
}

/** Number that animates whenever its target value changes. */
function Animated({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    const duration = 500;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span className="tabular-nums">
      {prefix}
      {Math.round(display).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
