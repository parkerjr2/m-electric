"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  /** Field-level errors keyed by name. */
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "source" | "message", string>>;
};

const HEAR_OPTIONS = new Set([
  "friend-family",
  "business-referral",
  "search-engine",
  "social-media",
  "other",
]);

/**
 * Minimum time in milliseconds we expect a real human to spend on the form
 * before submitting. Anything faster is almost certainly a bot.
 */
const MIN_FORM_FILL_MS = 2000;

function asString(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // ── Anti-spam ───────────────────────────────────────────────────────────
  // Honeypot: legitimate users never fill this hidden field. Silently
  // succeed for bots so they don't retry with the field cleared.
  const honeypot = asString(formData.get("website"));
  if (honeypot) {
    return { status: "ok", message: "Thanks — we'll be in touch shortly." };
  }

  // Too-fast submission → almost certainly a bot. Same silent-success.
  const renderedAtRaw = asString(formData.get("renderedAt"));
  const renderedAt = Number(renderedAtRaw);
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_FORM_FILL_MS) {
    return { status: "ok", message: "Thanks — we'll be in touch shortly." };
  }

  // ── Field validation ────────────────────────────────────────────────────
  const name = asString(formData.get("name"));
  const phone = asString(formData.get("phone"));
  const email = asString(formData.get("email"));
  const source = asString(formData.get("source"));
  const message = asString(formData.get("message"));

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};

  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (name.length > 100) fieldErrors.name = "Name is too long.";

  // Loose phone check: allow any 10+ digits with separators. We're not
  // validating dial codes — Marshall just needs to be able to call back.
  const phoneDigits = phone.replace(/\D+/g, "");
  if (phoneDigits.length < 10) fieldErrors.phone = "Please enter a valid phone number.";
  if (phoneDigits.length > 15) fieldErrors.phone = "Phone number is too long.";

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (email.length > 254) fieldErrors.email = "Email is too long.";

  if (!HEAR_OPTIONS.has(source)) fieldErrors.source = "Please pick one of the options.";

  if (message.length < 10) fieldErrors.message = "Tell us a little more — at least a sentence.";
  if (message.length > 5000) fieldErrors.message = "Message is too long.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  // ── Send via Resend ─────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO;
  const from = process.env.CONTACT_FORM_FROM;

  if (!apiKey || !to || !from) {
    console.error("contact form env missing", {
      hasKey: Boolean(apiKey),
      hasTo: Boolean(to),
      hasFrom: Boolean(from),
    });
    return {
      status: "error",
      message:
        "We couldn't deliver your message right now. Please call (918) 992-6282 instead.",
    };
  }

  const sourceLabel: Record<string, string> = {
    "friend-family": "Friend or Family",
    "business-referral": "Business Referral",
    "search-engine": "Search Engine",
    "social-media": "Social Media",
    other: "Other",
  };

  const subject = `New contact from ${name} via m-electricllc.com`;

  const text = [
    `New contact form submission`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Source:  ${sourceLabel[source] ?? source}`,
    ``,
    `Message:`,
    message,
    ``,
    `—`,
    `Sent from m-electricllc.com`,
  ].join("\n");

  const html = `<!doctype html><html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.5;">
<h2 style="margin: 0 0 16px;">New contact form submission</h2>
<table style="border-collapse: collapse; margin-bottom: 16px;">
<tr><td style="padding: 4px 16px 4px 0; color: #666;">Name</td><td style="padding: 4px 0;">${escapeHtml(name)}</td></tr>
<tr><td style="padding: 4px 16px 4px 0; color: #666;">Phone</td><td style="padding: 4px 0;"><a href="tel:${escapeHtml(phoneDigits)}">${escapeHtml(phone)}</a></td></tr>
<tr><td style="padding: 4px 16px 4px 0; color: #666;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
<tr><td style="padding: 4px 16px 4px 0; color: #666;">Source</td><td style="padding: 4px 0;">${escapeHtml(sourceLabel[source] ?? source)}</td></tr>
</table>
<h3 style="margin: 16px 0 8px;">Message</h3>
<p style="white-space: pre-wrap; margin: 0; padding: 12px; background: #f5f5f5; border-radius: 6px;">${escapeHtml(message)}</p>
<p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from m-electricllc.com</p>
</body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("resend send error", error);
      return {
        status: "error",
        message:
          "We couldn't deliver your message right now. Please call (918) 992-6282 instead.",
      };
    }

    return {
      status: "ok",
      message:
        "Thanks — we received your message and will be in touch shortly. Need help right now? Call (918) 992-6282.",
    };
  } catch (err) {
    console.error("resend send threw", err);
    return {
      status: "error",
      message:
        "We couldn't deliver your message right now. Please call (918) 992-6282 instead.",
    };
  }
}
