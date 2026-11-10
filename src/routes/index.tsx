import { createFileRoute, Link } from "@tanstack/react-router";
import { business, internationalDelivery, regions, sectors } from "@/data/business";
import { services } from "@/data/services";
import { lifecycle } from "@/data/content";
import { ContactBand, SectionHeading } from "@/components/site/Blocks";
import { ArrowIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "JDE Engineering | Commissioning & Electrical Safety Consultancy",
      "Commissioning, electrical safe systems of work, authorised persons, electrical testing and QA/QC for data centres and mission-critical facilities across the UK and Europe.",
      "/",
    ),
  component: Home,
});

const pad = (n: number) => String(n + 1).padStart(2, "0");

function Home() {
  return (
    <>
      {/* Hero: type-led, no cover photo. */}
      <section className="grid-lines border-b border-line">
        <div className="container-site grid gap-12 pb-16 pt-14 md:pb-24 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-accent">Specialist engineering consultancy</p>
            <h1 className="mt-5 text-[2.25rem] md:text-[3.5rem]">
              Commissioning and electrical safety for mission&#8209;critical infrastructure
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-on-navy-muted md:text-xl">
              {business.focus} For data centres, pharmaceutical, industrial and commercial
              facilities across the UK and Europe.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-accent">
                Discuss your project <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Our services
              </Link>
            </div>
          </div>

          {/* Capability panel: the eight service areas, set like a spec sheet. */}
          <div className="border border-line bg-navy-deep/70">
            <p className="eyebrow border-b border-line px-5 py-4 text-on-navy-muted">
              Capabilities
            </p>
            <ol>
              {services.map((s, i) => (
                <li key={s.slug} className="border-b border-line last:border-b-0">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-navy-raised"
                  >
                    <span className="font-mono text-sm text-accent">{pad(i)}</span>
                    <span className="flex-1 font-medium">{s.short}</span>
                    <ArrowIcon className="h-4 w-4 text-on-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-line">
        <div className="container-site grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.name} className="py-8 sm:pr-8 lg:py-12">
              <h2 className="text-xl">{s.name}</h2>
              <p className="mt-2 text-[0.97rem] text-on-navy-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="on-paper section-pad">
        <div className="container-site">
          <SectionHeading
            light
            label="01 / Services"
            title="From strategy to handover"
            intro="Eight service areas, delivered on their own or as one team across the life of a project."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col bg-paper p-6 transition-colors hover:bg-white md:p-7"
              >
                <span className="font-mono text-sm text-ink-muted">{pad(i)}</span>
                <h3 className="mt-6 text-xl">{s.name}</h3>
                <p className="mt-3 flex-1 text-[0.97rem] text-ink-muted">{s.summary}</p>
                <span className="link-arrow mt-6 text-[0.95rem]">
                  View service <ArrowIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            label="02 / How we support a project"
            title="One partner across the project lifecycle"
            intro="JDE can join at any stage, or carry a project from early strategy through to final acceptance."
          />
          <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-5">
            {lifecycle.map((l) => (
              <li key={l.step} className="bg-navy p-6">
                <span className="font-mono text-sm text-accent">{l.step}</span>
                <h3 className="mt-4 text-lg">{l.title}</h3>
                <p className="mt-2 text-[0.95rem] text-on-navy-muted">{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* International delivery */}
      <section className="on-paper section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            light
            label="03 / Where we work"
            title="UK and European delivery"
            intro={internationalDelivery}
          />
          <ul className="grid self-end border-t border-border sm:grid-cols-2">
            {regions.map((r) => (
              <li
                key={r}
                className="flex items-center gap-3 border-b border-border py-4 font-heading text-lg font-bold sm:odd:pr-6"
              >
                <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Careers */}
      <section className="section-pad border-b border-line">
        <div className="container-site flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="04 / Careers"
            title="Work with JDE"
            intro="We're always interested in hearing from experienced commissioning engineers, authorised persons and electrical safety professionals."
          />
          <Link to="/careers" className="btn btn-outline-light shrink-0">
            Careers at JDE <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
