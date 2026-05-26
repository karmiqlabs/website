import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "money" | "warn";

const tones: Record<Tone, string> = {
  default: "border-border bg-surface text-muted",
  accent: "border-transparent bg-accent-soft text-accent",
  money: "border-transparent bg-money-soft text-money",
  warn: "border-transparent bg-[color-mix(in_srgb,var(--warn)_14%,transparent)] text-warn",
};

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
