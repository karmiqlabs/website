"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  monthlyBill: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const interests = ["Cloud Migration", "Legacy Modernization", "Both", "Not sure"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email us directly.");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-money" />
        <h3 className="mt-4 text-xl font-semibold">Thanks — message received.</h3>
        <p className="mt-2 max-w-sm text-muted">
          We&apos;ll reply within 24 hours on business days. For anything urgent, email{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-surface p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register("name")} className="field" placeholder="Jane Doe" />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <input {...register("email")} className="field" placeholder="jane@company.com" />
        </Field>
        <Field label="Company" optional>
          <input {...register("company")} className="field" placeholder="Acme Inc." />
        </Field>
        <Field label="Monthly cloud bill (USD)" optional>
          <input {...register("monthlyBill")} className="field" placeholder="$8,000" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What do you need help with?" optional>
          <select {...register("interest")} className="field" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us more" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            className="field resize-y"
            placeholder="A few lines about your stack, current setup, or what's slowing you down."
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-warn/30 bg-[color-mix(in_srgb,var(--warn)_10%,transparent)] px-4 py-3 text-sm text-warn">
          {errorMsg}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message — reply in 24hrs
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-2 text-sm font-medium">
        {label}
        {optional && <span className="mono text-xs text-faint">optional</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-warn">{error}</span>}
    </label>
  );
}
