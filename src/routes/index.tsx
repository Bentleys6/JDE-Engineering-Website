import { createFileRoute, Link } from "@tanstack/react-router";
import { business, internationalDelivery, regions, sectors } from "@/data/business";
import { services } from "@/data/services";
import { keyFacts, lifecycle, statement } from "@/data/content";
import { EnquirySection, SectionHeading } from "@/components/site/Blocks";
import { ArrowIcon, ServiceIcon } from "@/components/site/Icons";
import { seo } from "@/lib/seo";
import { Img } from "@/components/site/Img";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "JDE Engineering | Commissioning & Electrical Safety Consultancy",
      "Commissioning, electrical safe systems of work, authorised persons, electrical testing and QA/QC for data centres and mission-critical facilities across the UK and Europe.",
      "/",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero: type-led, no cover photo. */}
      <section className="hero-brand border-b border-line">
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
              <Link to="/" hash="enquiry" className="btn btn-primary">
                Discuss your project <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Our services
              </Link>
            </div>
          </div>

          {/* Capability panel: the eight service areas, set like a spec sheet. */}
          <div className="overflow-hidden rounded-[10px] border border-line bg-navy-raised/90 backdrop-blur">
            <p className="eyebrow border-b border-line px-5 py-4 text-on-navy-muted">
              Capabilities
            </p>
            <ol>
              {services.map((s) => (
                <li key={s.slug} className="border-b border-line last:border-b-0">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/5"
                  >
                    <ServiceIcon slug={s.slug} className="h-5 w-5 shrink-0 text-accent" />
                    <span className="flex-1 font-medium">{s.short}</span>
                    <ArrowIcon className="h-4 w-4 text-on-navy-muted transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Key facts: part of the hero, same background, one hairline above. */}
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line py-10 md:py-12 lg:grid-cols-4">
            {keyFacts.map((k) => (
              <div
                key={k.label}
                className="lg:border-l lg:border-line lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <dt className="sr-only">{k.label}</dt>
                <dd className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                  {k.value}
                </dd>
                <dd className="mt-2 max-w-[16rem] text-[0.95rem] text-on-navy-muted">{k.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-line">
        <div className="container-site grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
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
            label="Services"
            title="From strategy to handover"
            intro="Eight service areas, delivered on their own or as one team across the life of a project."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-paper group flex flex-col p-6 transition-shadow hover:shadow-[0_12px_32px_-16px_rgb(10_15_44/0.35)] md:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-accent">
                  <ServiceIcon slug={s.slug} className="h-[22px] w-[22px]" />
                </span>
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

      {/* Statement, beside a photo of JDE's own team at work */}
      <section className="hero-brand border-b border-line">
        <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] md:text-[3.75rem]">
              {statement.lines.map((l, i) => (
                <span
                  key={l}
                  className={`block ${i === statement.lines.length - 1 ? "text-white" : "text-white/45"}`}
                >
                  {l}
                </span>
              ))}
            </p>
            <p className="mt-8 flex items-center gap-3 text-on-navy-muted">
              <span className="h-px w-10 bg-accent" aria-hidden="true" /> {statement.caption}
            </p>
          </div>
          <Img
            name="hvSwitching"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] w-full rounded-[10px] border border-line object-cover"
          />
        </div>
      </section>

      {/* Lifecycle */}
      <section className="navy-depth section-pad">
        <div className="container-site">
          <SectionHeading
            label="How we support a project"
            title="One partner across the project lifecycle"
            intro="JDE can join at any stage, or carry a project from early strategy through to final acceptance."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {lifecycle.map((l) => (
              <li key={l.step} className="card-navy p-6">
                <span className="text-sm font-medium tabular-nums text-accent">{l.step}</span>
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
            label="Where we work"
            title="UK and European delivery"
            intro={internationalDelivery}
          />
          <ul className="grid self-end border-t border-border sm:grid-cols-2">
            {regions.map((r) => (
              <li
                key={r}
                className="flex items-center gap-3 border-b border-border py-4 font-heading text-lg font-medium sm:odd:pr-6"
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
            label="Careers"
            title="Work with JDE"
            intro="We're always interested in hearing from experienced commissioning engineers, authorised persons and electrical safety professionals."
          />
          <Link to="/careers" className="btn btn-outline-light shrink-0">
            Careers at JDE <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <EnquirySection source="Homepage" eyebrow="Get in touch" />
    </>
  );
}
