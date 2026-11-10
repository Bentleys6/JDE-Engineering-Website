/**
 * Enquiry form wording and options. The form itself is src/components/site/EnquiryForm.tsx.
 * Service options come from services.ts and locations from business.ts, so they stay in step.
 */
import { regions } from "@/data/business";
import { services } from "@/data/services";

export const enquiry = {
  title: "Discuss your project",
  intro: "Tell us what you need and where, and the right person at JDE will come back to you.",
  submitLabel: "Send enquiry",
  privacyNote: "We'll only use your details to reply to this enquiry.",
  serviceOptions: [...services.map((s) => s.short), "Not sure / several"],
  locationOptions: regions
    .map((r) => (r === "Wider European Union" ? "Elsewhere in Europe" : r))
    .concat("Other"),
  fields: {
    name: { label: "Name", placeholder: "Full name" },
    company: { label: "Company", placeholder: "Company or organisation" },
    email: { label: "Email", placeholder: "you@company.com" },
    phone: { label: "Phone", placeholder: "Best number to reach you" },
    service: { label: "Service needed", placeholder: "Select a service" },
    location: { label: "Project location", placeholder: "Select a country" },
    details: {
      label: "Project details",
      placeholder:
        "Site type, scope, programme dates and anything else that helps us understand the project.",
    },
  },
  /** Shown when the form can't send yet (no Web3Forms key) or sending fails. */
  notSentTitle: "Online enquiries aren't switched on yet",
  notSentText:
    "Your answers are still here. Send them to us by email instead and we'll reply as normal.",
  sendErrorTitle: "Your enquiry didn't send",
  sendErrorText: "Something went wrong. Please send it to us by email instead.",
};
