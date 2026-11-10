import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle, sectors } from "@/data/business";
import { caseStudies, projectsConfidentiality } from "@/data/content";
import { serviceBySlug } from "@/data/services";
import { ContactBand, PageHeader, SectionHeading } from "@/components/site/Blocks";
import { MailIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/projects")({
  head: () => ({
    ...seo(
      pageTitle("Projects & Case Studies"),
      "Commissioning, electrical safety and testing projects delivered by JDE Engineering for data centres and mission-critical facilities across the UK and Europe.",
      "/projects",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Projects", path: "/projects" }])),
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects and case studies"
        intro={projectsConfidentiality}
      />

      <section className="on-paper section-pad">
        <div className="container-site">
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((c) => (
                <article
                  key={c.slug}
                  id={c.slug}
                  className="border border-border bg-white p-6 md:p-8"
                >
                  <p className="eyebrow text-ink-muted">
                    {[c.sector, c.location, c.siteCode].filter(Boolean).join(" · ")}
                  </p>
                  <h2 className="mt-4 text-2xl">{c.title}</h2>
                  <p className="mt-4 text-ink-muted">{c.background}</p>
                  <h3 className="eyebrow mt-6 text-ink-muted">Scope</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {c.scope.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <h3 className="eyebrow mt-6 text-ink-muted">Outcome</h3>
                  <p className="mt-2">{c.outcome}</p>
                  <p className="mt-6 flex flex-wrap gap-2">
                    {c.services.map((slug) => (
                      <span key={slug} className="bg-paper px-2.5 py-1 text-sm">
                        {serviceBySlug(slug)?.short ?? slug}
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <SectionHeading
                light
                label="Case studies"
                title="Case studies are being prepared"
                intro="If you'd like to know about work we've delivered on projects similar to yours, get in touch and we'll share what we can."
              />
              <div className="self-end">
                <a href={`mailto:${business.email}`} className="btn btn-navy">
                  <MailIcon className="h-4 w-4" /> {business.email}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading label="Sectors" title="Where our work takes us" />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="bg-navy p-6 md:p-7">
                <h3 className="text-xl">{s.name}</h3>
                <p className="mt-3 text-[0.97rem] text-on-navy-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
