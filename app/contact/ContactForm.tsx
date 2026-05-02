"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import {
  submitContactForm,
  type ContactState,
} from "./actions";

const SOURCE_OPTIONS = [
  { value: "friend-family", label: "Friend or Family" },
  { value: "business-referral", label: "Business Referral" },
  { value: "search-engine", label: "Search Engine (Google, etc.)" },
  { value: "social-media", label: "Social Media" },
  { value: "other", label: "Other" },
] as const;

const INITIAL: ContactState = { status: "idle" };

const inputBase =
  "w-full bg-black border border-neutral-800 rounded-md px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors";

const labelBase =
  "block text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    INITIAL,
  );

  // Anti-bot: capture render time client-side (a ref, so no re-render), then
  // copy it into the hidden input at submit time via onSubmit. The server
  // action fails the request if elapsed < MIN_FORM_FILL_MS.
  const renderedAtRef = useRef(0);
  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const input = e.currentTarget.elements.namedItem("renderedAt");
    if (input instanceof HTMLInputElement) {
      input.value = String(renderedAtRef.current);
    }
  };

  if (state.status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-neutral-950 border border-red-600/40 rounded-lg p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-red-600/10 border border-red-600/30 text-red-500 mb-5">
          <CheckIcon className="size-6" />
        </div>
        <h3 className="text-2xl font-semibold text-white">Message received.</h3>
        <p className="mt-3 text-neutral-300 leading-relaxed">{state.message}</p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          <PhoneIcon className="size-4" />
          Call {PHONE_DISPLAY}
        </a>
      </motion.div>
    );
  }

  const fieldError = state.fieldErrors;

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/*
        Honeypot field. Off-screen via absolute positioning (bots ignore CSS
        but parse HTML structure, so display:none is detected; off-screen
        positioning + tabindex=-1 + aria-hidden is the canonical pattern).
      */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px] size-px overflow-hidden"
      >
        <label htmlFor="website-hp">
          Website (leave blank)
          <input
            id="website-hp"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <input type="hidden" name="renderedAt" defaultValue="" />

      {state.status === "error" && state.message && !fieldError && (
        <div
          role="alert"
          className="rounded-md border border-red-600/40 bg-red-950/40 px-4 py-3 text-sm text-red-200"
        >
          {state.message}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className={inputBase}
            placeholder="Jane Doe"
            aria-invalid={Boolean(fieldError?.name)}
            aria-describedby={fieldError?.name ? "name-error" : undefined}
          />
          {fieldError?.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-400">
              {fieldError.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={32}
            className={inputBase}
            placeholder="(918) 555-1234"
            aria-invalid={Boolean(fieldError?.phone)}
            aria-describedby={fieldError?.phone ? "phone-error" : undefined}
          />
          {fieldError?.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-red-400">
              {fieldError.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          className={inputBase}
          placeholder="jane@example.com"
          aria-invalid={Boolean(fieldError?.email)}
          aria-describedby={fieldError?.email ? "email-error" : undefined}
        />
        {fieldError?.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-400">
            {fieldError.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="source" className={labelBase}>
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          id="source"
          name="source"
          required
          defaultValue=""
          className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22none%22 stroke=%22%23a3a3a3%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M1 1l5 5 5-5%22/></svg>')] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
          aria-invalid={Boolean(fieldError?.source)}
          aria-describedby={fieldError?.source ? "source-error" : undefined}
        >
          <option value="" disabled>
            Pick one…
          </option>
          {SOURCE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {fieldError?.source && (
          <p id="source-error" className="mt-1.5 text-sm text-red-400">
            {fieldError.source}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className={`${inputBase} resize-y`}
          placeholder="Tell us what's going on — what you need, where, and when."
          aria-invalid={Boolean(fieldError?.message)}
          aria-describedby={fieldError?.message ? "message-error" : undefined}
        />
        {fieldError?.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-400">
            {fieldError.message}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
        <p className="text-xs text-neutral-500">
          Required fields marked with <span className="text-red-500">*</span>.
          We&rsquo;ll never share your info.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-bold text-lg px-7 py-3.5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          {pending ? "Sending…" : "Send Message"}
          {!pending && <ArrowRightIcon className="size-4" />}
        </button>
      </div>
    </form>
  );
}
