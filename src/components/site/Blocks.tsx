import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { business } from "@/data/business";
import { ArrowIcon, MailIcon } from "./Icons";
import { EnquiryForm } from "./EnquiryForm";
import { enquiry } from "@/data/enquiry";

/** Navy page header for inner pages: breadcrumb label, title and intro. No photo by design. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-brand border-b border-line">
      <div className="container-site pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.4rem] md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-on-navy-muted md:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** Section heading with a numbered mono label, e.g. "02 / Sectors". */
export function SectionHeading({
  label,
  title,
  intro,
  light,
}: {
  label: string;
  title: string;
  intro?: string;
  /** True on paper (light) sections. */
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-ink-muted" : "text-accent"}`}>{label}</p>
      <h2 className="mt-4 text-3xl md:text-[2.75rem]">{title}</h2>
      {intro && (
        <p className={`mt-5 text-lg ${light ? "text-ink-muted" : "text-on-navy-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Closing call to action used at the foot of most pages. */
export function ContactBand({
  title = "Discuss your project",
  text = "Tell us about your programme, site and scope, and we'll come back to you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-line bg-navy">
      <div className="container-site flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-on-navy-muted">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${business.email}`} className="btn btn-primary">
            <MailIcon className="h-4 w-4" /> {business.email}
          </a>
          <Link to="/contact" hash="enquiry" className="btn btn-outline-light">
            Send an enquiry <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Enquiry form section (id="enquiry"), used on the homepage and the contact page. */
export function EnquirySection({
  source,
  eyebrow = "Contact",
  title = enquiry.title,
  children,
}: {
  source: string;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <section id="enquiry" className="on-paper section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow text-ink-muted">{eyebrow}</p>
          <h2 className="mt-4 text-3xl md:text-[2.75rem]">{title}</h2>
          <p className="mt-5 text-lg text-ink-muted">{enquiry.intro}</p>
          {children ?? (
            <p className="mt-6 text-[0.97rem] text-ink-muted">
              Prefer email?{" "}
              <a href={`mailto:${business.email}`} className="link-underline text-ink">
                {business.email}
              </a>
            </p>
          )}
        </div>
        <EnquiryForm source={source} />
      </div>
    </section>
  );
}
