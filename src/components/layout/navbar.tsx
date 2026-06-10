"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = [
  { label: "CloudShift", sub: "Migration", href: "/services/cloudshift" },
  { label: "StackEvolve", sub: "Modernization", href: "/services/stackevolve" },
  { label: "PaySync", sub: "Payroll & HR", href: "/services/payroll" },
  { label: "ROI Calculator", sub: "Estimate your savings", href: "/#roi" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-lg font-semibold tracking-tight">
            karmiq<span className="text-accent">labs</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-bg/95 shadow-xl backdrop-blur-xl"
                >
                  {services.map((s, i) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "flex flex-col px-4 py-3.5 transition-colors hover:bg-surface",
                        i !== services.length - 1 && "border-b border-border",
                      )}
                    >
                      <span className="text-sm font-medium text-fg">{s.label}</span>
                      <span className="mt-0.5 text-xs text-faint">{s.sub}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rest of nav */}
          {nav
            .filter((item) => item.label !== "Services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/contact" size="sm" className="hidden md:inline-flex">
            Get Free Audit
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-fg md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {/* Services expandable */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm text-muted hover:bg-surface hover:text-fg"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      mobileServicesOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-surface"
                          >
                            <span className="font-medium text-fg">{s.label}</span>
                            <span className="text-xs text-faint">{s.sub}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {nav
                .filter((item) => item.label !== "Services")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted hover:bg-surface hover:text-fg"
                  >
                    {item.label}
                  </Link>
                ))}
              <Button href="/contact" size="md" className="mt-2 w-full">
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-surface">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 16 L10 10 L14 13 L20 6"
          stroke="var(--money)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6 L20 11 M20 6 L15 6"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
