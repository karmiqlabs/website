import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-surface p-6 md:p-8",
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
