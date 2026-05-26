import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  company: z.string().max(160).optional().or(z.literal("")),
  monthlyBill: z.string().max(40).optional().or(z.literal("")),
  interest: z.string().max(60).optional().or(z.literal("")),
  message: z.string().min(1).max(4000),
});

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please check the form fields and try again." },
      { status: 422 },
    );
  }

  const body = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_EMAIL || site.email;

  // Dev / unconfigured fallback: log instead of sending.
  if (!apiKey) {
    console.info("[contact] new submission (no RESEND_API_KEY set):", body);
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${site.name} <onboarding@resend.dev>`,
        to: [to],
        reply_to: body.email,
        subject: `New inquiry from ${body.name}${body.company ? ` (${body.company})` : ""}`,
        text: [
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Company: ${body.company || "—"}`,
          `Monthly cloud bill: ${body.monthlyBill || "—"}`,
          `Interested in: ${body.interest || "—"}`,
          "",
          body.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] resend error:", res.status, detail);
      return NextResponse.json(
        { success: false, error: "Could not send right now. Please email us directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please email us directly." },
      { status: 500 },
    );
  }
}
