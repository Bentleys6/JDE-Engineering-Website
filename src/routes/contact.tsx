import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle, regions } from "@/data/business";
import { PageHeader } from "@/components/site/Blocks";
import { MailIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo(
      pageTitle("Contact"),
      "Contact JDE Engineering about commissioning, electrical safety, authorised persons, testing or technical consultancy for your project.",
      "/contact",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Contact", path: "/contact" }])),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      label: "New business enquiries",
      text: "Tell us about the project, site location, programme and the support you need.",
      email: business.email,
    },
    {
      label: "Careers",
      text: "Send your CV and tell us about your experience and authorisations.",
      email: business.careersEmail,
    },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="For new projects, resourcing and technical enquiries, email the team and we'll get back to you."
      />

      <section className="on-paper section-pad">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.label} className="card-paper flex flex-col p-6 md:p-8">
              <h2 className="eyebrow text-ink-muted">{c.label}</h2>
              <p className="mt-4 flex-1 text-lg text-ink-muted">{c.text}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-6 inline-flex items-center gap-3 break-all font-heading text-xl font-medium text-ink hover:underline md:text-2xl"
              >
                <MailIcon className="h-6 w-6 shrink-0" /> {c.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="eyebrow text-cyan">Where we work</h2>
            <p className="mt-4 text-lg text-on-navy-muted">{regions.join(" · ")}</p>
          </div>
          <div>
            <h2 className="eyebrow text-cyan">Company details</h2>
            <p className="mt-4 text-lg text-on-navy-muted">
              {business.legalName}
              <br />
              Registered in England and Wales, company no. {business.companyNumber}
              <br />
              Registered office: {business.registeredOffice}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
