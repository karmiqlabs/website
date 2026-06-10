"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const proof = [
  "1 client delivered",
  "$10,000 project shipped",
  "100% on-time delivery",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="glow-mesh relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Badge tone="accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cloud · Legacy Modernization · Payroll &amp; HR Tech
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl"
          >
            Cut cloud bills by{" "}
            <span className="text-money">60%</span>.
            <br />
            Kill your{" "}
            <span className="text-gradient">tech debt</span>.
            <br />
            Automate payroll.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We migrate infrastructure off AWS to cost-optimized providers, rebuild
            legacy PHP, Java, and .NET codebases into modern stacks, and automate
            payroll with biometric attendance and one-click salary payments. Zero
            downtime. AI-accelerated delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#roi" size="lg">
              Calculate my savings
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#work" size="lg" variant="outline">
              See our work
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
          >
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-sm text-muted">
                <Check className="h-4 w-4 text-money" />
                {p}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: terminal cost-receipt */}
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
        >
          <CostReceipt />
        </motion.div>
      </div>
    </section>
  );
}

function CostReceipt() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_30%,var(--glow-1),transparent)] blur-xl" />
      <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="mono ml-3 flex items-center gap-1.5 text-xs text-faint">
            <TerminalSquare className="h-3.5 w-3.5" />
            cost-audit.sh
          </span>
        </div>

        <div className="mono space-y-3 p-5 text-sm">
          <Line label="$ analyze --provider aws" muted />
          <div className="flex items-center justify-between">
            <span className="text-muted">Current monthly bill</span>
            <span className="text-fg">$8,400</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Compute / DB / egress</span>
            <span className="text-faint line-through">$8,400</span>
          </div>

          <div className="my-3 h-px w-full bg-border" />

          <Line label="$ migrate --to hetzner --zero-downtime" muted />
          <div className="flex items-center justify-between rounded-lg bg-money-soft px-3 py-2.5">
            <span className="text-money">New monthly bill</span>
            <span className="text-money">$1,180</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Stat k="Monthly saved" v="$7,220" tone="money" />
            <Stat k="Annual saved" v="$86,640" tone="money" />
            <Stat k="Reduction" v="86%" tone="accent" />
            <Stat k="Downtime" v="0 min" tone="accent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <div className={muted ? "text-faint" : "text-fg"}>
      <span className="text-accent">›</span> {label}
    </div>
  );
}

function Stat({
  k,
  v,
  tone,
}: {
  k: string;
  v: string;
  tone: "money" | "accent";
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-2 px-3 py-2.5">
      <div className="text-[0.7rem] uppercase tracking-wide text-faint">{k}</div>
      <div className={tone === "money" ? "mt-0.5 text-money" : "mt-0.5 text-accent"}>
        {v}
      </div>
    </div>
  );
}
