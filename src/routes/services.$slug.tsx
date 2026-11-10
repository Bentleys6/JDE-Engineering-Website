import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { serviceBySlug, services } from "@/data/services";
import { pageTitle } from "@/data/business";
import { ContactBand, PageHeader } from "@/components/site/Blocks";
import { ArrowIcon, CheckIcon, ChevronIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqsFor } from "@/data/faqs";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
    const faqs = faqsFor(s.slug);
    return {
      ...seo(pageTitle(s.name), s.summary, `/services/${s.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Services", path: "/services" },
              { name: s.name, path: `/services/${s.slug}` },
            ]),
          ),
        },
        ...(faqs.length
          ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) }]
          : []),
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug);
  const faqs = faqsFor(s.slug);

  return (
    <>
      <PageHeader eyebrow="Services" title={s.name} intro={s.summary} />

      <section className="on-paper section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lg text-ink-muted">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="pt-4">
              <Link to="/contact" hash="enquiry" className="btn btn-navy">
                Discuss {s.short.toLowerCase()} <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="eyebrow text-ink-muted">{s.listTitle}</h2>
            <ul className="mt-4 border-t border-border">
              {s.items.map((item) => (
                <li
                  key={item.name}
                  className="flex gap-3 border-b border-border py-4 text-lg font-medium"
                >
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-navy" />
                  <span>
                    {item.name}
                    {item.text && (
                      <span className="mt-1 block text-base font-normal text-ink-muted">
                        {item.text}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            {s.note && <p className="mt-6 border-l-2 border-navy pl-4 text-ink-muted">{s.note}</p>}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section id="faqs" className="navy-depth section-pad border-b border-line">
          <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow text-accent">FAQs</p>
              <h2 className="mt-4 text-3xl md:text-[2.75rem]">Common questions</h2>
            </div>
            <div className="border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronIcon className="mt-1 h-5 w-5 shrink-0 rotate-90 text-on-navy-muted transition-transform group-open:-rotate-90" />
                  </summary>
                  <p className="pb-6 pr-10 text-on-navy-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container-site">
          <h2 className="eyebrow text-accent">Other services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug} className="card-navy overflow-hidden">
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group flex h-full items-center justify-between gap-4 p-5 font-medium transition-colors hover:bg-white/5"
                >
                  {o.short}
                  <ArrowIcon className="h-4 w-4 shrink-0 text-on-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
