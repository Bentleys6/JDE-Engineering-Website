import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { serviceBySlug, services } from "@/data/services";
import { pageTitle } from "@/data/business";
import { ContactBand, PageHeader } from "@/components/site/Blocks";
import { ArrowIcon, CheckIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
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
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug);

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
              <Link to="/contact" className="btn btn-navy">
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
