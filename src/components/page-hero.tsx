import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="glow-mesh relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <Badge tone="accent" className="mx-auto">
          {eyebrow}
        </Badge>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
