import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle, regions } from "@/data/business";
import { EnquirySection, PageHeader } from "@/components/site/Blocks";
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
  const emails = [
    { label: "New business", email: business.email },
    { label: "Careers and CVs", email: business.careersEmail },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="For new projects, resourcing and technical enquiries, send us the details below or email the team."
      />

      <EnquirySection source="Contact page" eyebrow="Project enquiry">
        <ul className="mt-8 space-y-5 border-t border-border pt-6">
          {emails.map((e) => (
            <li key={e.label}>
              <span className="block text-sm text-ink-muted">{e.label}</span>
              <a
                href={`mailto:${e.email}`}
                className="mt-1 inline-flex items-center gap-2.5 break-all text-lg font-medium text-ink hover:underline"
              >
                <MailIcon className="h-5 w-5 shrink-0" /> {e.email}
              </a>
            </li>
          ))}
        </ul>
      </EnquirySection>

      <section className="section-pad">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="eyebrow text-accent">Where we work</h2>
            <p className="mt-4 text-lg text-on-navy-muted">{regions.join(" · ")}</p>
          </div>
          <div>
            <h2 className="eyebrow text-accent">Company details</h2>
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
