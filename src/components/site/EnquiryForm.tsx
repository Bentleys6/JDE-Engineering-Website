import { useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { business } from "@/data/business";
import { enquiry } from "@/data/enquiry";
import { isEmail } from "@/lib/validation";
import { getLeadSource } from "@/lib/lead-source";
import { ArrowIcon, MailIcon } from "./Icons";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  details: string;
  botcheck: boolean;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  details: "",
  botcheck: false,
};

/**
 * Project enquiry form. Posts to Web3Forms from the browser once business.formKeys.client is set.
 * Until then, Send explains that online enquiries aren't switched on and offers a ready-filled
 * email instead, so the visitor's answers aren't lost and nothing pretends to send.
 */
export function EnquiryForm({ source }: { source: string }) {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [f, setF] = useState<Fields>(empty);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [problem, setProblem] = useState<"" | "notLive" | "failed">("");
  const t = enquiry.fields;

  const errors: Record<string, string> = {
    name: f.name.trim() ? "" : "Please enter your name.",
    company: f.company.trim() ? "" : "Please enter your company.",
    email: !f.email.trim()
      ? "Please enter your email address."
      : isEmail(f.email)
        ? ""
        : "Please enter a valid email address.",
    service: f.service ? "" : "Please choose a service.",
    location: f.location ? "" : "Please choose a location.",
    details: f.details.trim() ? "" : "Please tell us a little about the project.",
  };
  const order = ["name", "company", "email", "service", "location", "details"];
  const err = (k: string) => (touched[k] ? errors[k] : "");
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }));
  const blur = (k: string) => () => setTouched((x) => ({ ...x, [k]: true }));

  const lines = () => [
    `${t.name.label}: ${f.name.trim()}`,
    `${t.company.label}: ${f.company.trim()}`,
    `${t.email.label}: ${f.email.trim()}`,
    ...(f.phone.trim() ? [`${t.phone.label}: ${f.phone.trim()}`] : []),
    `${t.service.label}: ${f.service}`,
    `${t.location.label}: ${f.location}`,
    "",
    f.details.trim(),
  ];
  const mailto = () =>
    `mailto:${business.email}?subject=${encodeURIComponent(
      `Project enquiry: ${f.service || "JDE Engineering"}`,
    )}&body=${encodeURIComponent(lines().join("\n"))}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(Object.fromEntries(order.map((k) => [k, true])));
    const firstBad = order.find((k) => errors[k]);
    if (firstBad) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    if (f.botcheck) return;
    if (!business.formKeys.client) {
      setProblem("notLive");
      return;
    }

    setSending(true);
    setProblem("");
    const body: Record<string, string | boolean> = {
      access_key: business.formKeys.client,
      subject: `New website enquiry: ${f.service} (${f.location})`,
      from_name: `${business.name} website`,
      replyto: f.email.trim(),
      botcheck: f.botcheck,
      Name: f.name.trim(),
      Company: f.company.trim(),
      Email: f.email.trim(),
      Phone: f.phone.trim() || "Not given",
      Service: f.service,
      Location: f.location,
      "Project details": f.details.trim(),
      "Sent from": source,
      ...getLeadSource(),
    };
    const post = (payload: object) =>
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    if (business.formKeys.agency)
      post({ ...body, access_key: business.formKeys.agency }).catch(() => {});
    try {
      const res = await post(body);
      const data = await res.json().catch(() => null);
      if (data?.success !== true) throw new Error("not sent");
      navigate({ to: "/thank-you" });
    } catch {
      setProblem("failed");
      setSending(false);
    }
  };

  const label = "block text-sm font-medium text-ink";
  const input =
    "mt-2 block w-full rounded-lg border border-[#cfd3e0] bg-white px-3.5 text-base text-ink outline-none transition placeholder:text-[#8a8fa8] focus:border-ink focus:ring-1 focus:ring-ink aria-[invalid=true]:border-[#c62828]";
  const errCls = "mt-1.5 text-sm text-[#c62828]";
  const field = (k: "name" | "company" | "email" | "phone", type = "text", auto = "") => (
    <div>
      <label htmlFor={`enq-${source}-${k}`} className={label}>
        {t[k].label}
        {k === "phone" && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      <input
        id={`enq-${source}-${k}`}
        name={k}
        type={type}
        autoComplete={auto || undefined}
        placeholder={t[k].placeholder}
        className={`${input} h-12`}
        value={f[k]}
        onChange={set(k)}
        onBlur={blur(k)}
        aria-invalid={!!err(k)}
      />
      {err(k) && <p className={errCls}>{err(k)}</p>}
    </div>
  );
  const select = (k: "service" | "location", options: string[]) => (
    <div>
      <label htmlFor={`enq-${source}-${k}`} className={label}>
        {t[k].label}
      </label>
      <select
        id={`enq-${source}-${k}`}
        name={k}
        className={`${input} h-12 appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='none'%20stroke='%23474d6b'%20stroke-width='2'%20viewBox='0%200%2024%2024'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] bg-[position:right_14px_center] bg-no-repeat pr-10 ${f[k] ? "" : "text-[#8a8fa8]"}`}
        value={f[k]}
        onChange={set(k)}
        onBlur={blur(k)}
        aria-invalid={!!err(k)}
      >
        <option value="">{t[k].placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      {err(k) && <p className={errCls}>{err(k)}</p>}
    </div>
  );

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="card-paper grid gap-5 p-5 sm:grid-cols-2 md:p-8"
    >
      {field("name", "text", "name")}
      {field("company", "text", "organization")}
      {field("email", "email", "email")}
      {field("phone", "tel", "tel")}
      {select("service", enquiry.serviceOptions)}
      {select("location", enquiry.locationOptions)}
      <div className="sm:col-span-2">
        <label htmlFor={`enq-${source}-details`} className={label}>
          {t.details.label}
        </label>
        <textarea
          id={`enq-${source}-details`}
          name="details"
          rows={5}
          placeholder={t.details.placeholder}
          className={`${input} py-3`}
          value={f.details}
          onChange={set("details")}
          onBlur={blur("details")}
          aria-invalid={!!err("details")}
        />
        {err("details") && <p className={errCls}>{err("details")}</p>}
      </div>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        checked={f.botcheck}
        onChange={(e) => setF((s) => ({ ...s, botcheck: e.target.checked }))}
      />

      {problem && (
        <div
          role="alert"
          className="rounded-lg border border-[#e6c9a8] bg-[#fdf6ee] p-4 sm:col-span-2"
        >
          <p className="font-medium text-ink">
            {problem === "notLive" ? enquiry.notSentTitle : enquiry.sendErrorTitle}
          </p>
          <p className="mt-1 text-[0.95rem] text-ink-muted">
            {problem === "notLive" ? enquiry.notSentText : enquiry.sendErrorText}
          </p>
          <a href={mailto()} className="btn btn-navy mt-4">
            <MailIcon className="h-4 w-4" /> Email it to {business.email}
          </a>
        </div>
      )}

      <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">{enquiry.privacyNote}</p>
        <button type="submit" disabled={sending} className="btn btn-navy disabled:opacity-60">
          {sending ? "Sending…" : enquiry.submitLabel} <ArrowIcon className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
