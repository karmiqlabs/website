import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "CloudShift — Migration", href: "/services/cloudshift" },
      { label: "StackEvolve — Modernization", href: "/services/stackevolve" },
      { label: "ROI Calculator", href: "/#roi" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/#work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border bg-bg-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-xs">
          <div className="text-lg font-semibold tracking-tight">
            karmiq<span className="text-accent">labs</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{site.tagline}</p>
          <p className="mono mt-4 text-xs text-faint">{site.location}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mono text-xs uppercase tracking-[0.2em] text-faint">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="mono text-xs uppercase tracking-[0.2em] text-faint">Connect</h4>
          <div className="mt-4 flex gap-2">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-border-strong"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-accent hover:border-border-strong"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="mono mt-4 inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
          >
            {site.email}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-faint sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} {site.name}. Built in India, serving the world.</span>
          <span className="mono">Zero-downtime migrations · Senior-only delivery</span>
        </div>
      </div>
    </footer>
  );
}
