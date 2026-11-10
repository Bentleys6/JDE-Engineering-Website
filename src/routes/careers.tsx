import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle } from "@/data/business";
import { jobRoles } from "@/data/content";
import { PageHeader, SectionHeading } from "@/components/site/Blocks";
import { MailIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/careers")({
  head: () => ({
    ...seo(
      pageTitle("Careers"),
      "Careers at JDE Engineering: commissioning, electrical safety, authorised person and testing roles across the UK and Europe.",
      "/careers",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Careers", path: "/careers" }])),
      },
    ],
  }),
  component: CareersPage,
});

const applyHref = (subject: string) =>
  `mailto:${business.careersEmail}?subject=${encodeURIComponent(subject)}`;

function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career with JDE"
        intro="We're always interested in hearing from experienced commissioning engineers, authorised persons, testing engineers and electrical safety professionals."
      >
        <a href={applyHref("CV")} className="btn btn-primary mt-9">
          <MailIcon className="h-4 w-4" /> Send your CV
        </a>
      </PageHeader>

      <section className="on-paper section-pad">
        <div className="container-site">
          <SectionHeading light label="Open roles" title="Current vacancies" />
          {jobRoles.length > 0 ? (
            <ul className="mt-10 border-t border-border">
              {jobRoles.map((r) => (
                <li
                  key={r.title}
                  className="flex flex-col gap-4 border-b border-border py-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-2xl">{r.title}</h3>
                    <p className="eyebrow mt-2 text-ink-muted">
                      {r.location} · {r.type}
                    </p>
                    <p className="mt-3 max-w-2xl text-ink-muted">{r.summary}</p>
                  </div>
                  <a href={applyHref(`Application: ${r.title}`)} className="btn btn-navy shrink-0">
                    Apply
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              There are no roles advertised right now. We still want to hear from experienced
              people: send your CV to{" "}
              <a href={applyHref("CV")} className="link-underline text-ink">
                {business.careersEmail}
              </a>{" "}
              and tell us about your experience, qualifications and where you're able to work.
            </p>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading label="How to apply" title="Applying to JDE" />
          <ol className="space-y-6">
            {[
              `Email your CV to ${business.careersEmail}, with the role in the subject line if you're applying for an advertised vacancy.`,
              "Include your current authorisations, qualifications and certificates, and the countries you can work in.",
              "We'll be in touch if your experience matches a current or upcoming project.",
            ].map((t, i) => (
              <li key={t} className="flex gap-5 border-b border-line pb-6">
                <span className="text-sm font-medium tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
