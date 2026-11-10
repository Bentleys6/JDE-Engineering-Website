import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { ContactBand, PageHeader } from "@/components/site/Blocks";
import { ArrowIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { pageTitle } from "@/data/business";

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...seo(
      pageTitle("Services"),
      "Commissioning, electrical safe systems of work, authorised persons, electrical testing, M&E QA/QC, technical consultancy, data centre services and project support.",
      "/services",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Services", path: "/services" }])),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Our services" intro={business.focus} />

      <section className="on-paper">
        <div className="container-site py-6 md:py-10">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid gap-6 border-b border-border py-12 last:border-b-0 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-16"
            >
              <div>
                <span className="text-sm font-medium tabular-nums text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl">{s.name}</h2>
                <p className="mt-4 text-lg text-ink-muted">{s.summary}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="link-arrow mt-6 text-[0.97rem]"
                >
                  More about {s.short} <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
              <ul className="grid self-start border-t border-border sm:grid-cols-2 sm:gap-x-8">
                {s.items.map((item) => (
                  <li key={item.name} className="flex gap-3 border-b border-border py-3.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-navy" aria-hidden="true" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
