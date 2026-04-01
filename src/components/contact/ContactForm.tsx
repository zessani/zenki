"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// Replace with your actual Formspree form ID after signing up at formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ productName }: { productName?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700 text-sm">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {productName && (
        <input type="hidden" name="product" value={productName} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-brand-gray-900 mb-1.5"
          >
            Full Name <span className="text-brand-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-brand-gray-900 mb-1.5"
          >
            Email Address <span className="text-brand-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-brand-gray-900 mb-1.5"
        >
          Company Name{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company or workshop"
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label
          htmlFor="inquiry_type"
          className="block text-sm font-semibold text-brand-gray-900 mb-1.5"
        >
          Inquiry Type <span className="text-brand-red-500">*</span>
        </label>
        <select
          id="inquiry_type"
          name="inquiry_type"
          required
          defaultValue=""
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition bg-white"
        >
          <option value="" disabled>Select inquiry type</option>
          <option value="Wholesale/Distribution">Wholesale / Distribution</option>
          <option value="Contract Manufacturing">Contract Manufacturing</option>
          <option value="Truck Parts/Mirrors">Truck Parts / Mirrors</option>
          <option value="Import/Sourcing">Import / Sourcing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-brand-gray-900 mb-1.5"
        >
          Message <span className="text-brand-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={
            productName
              ? `I'm interested in ${productName}. Please share pricing and availability.`
              : "Tell us about your enquiry..."
          }
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <span>
            Something went wrong. Please try again or email us directly at{" "}
            <a
              href="mailto:info@zenki-pk.com"
              className="underline font-semibold"
            >
              info@zenki-pk.com
            </a>
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue-900 text-white px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base rounded-md font-semibold hover:bg-brand-blue-600 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
