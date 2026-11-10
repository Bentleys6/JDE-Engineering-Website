import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle, standards } from "@/data/business";
import { values } from "@/data/content";
import { initials, team } from "@/data/team";
import { ContactBand, PageHeader, SectionHeading } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...seo(
      pageTitle("About Us"),
      "JDE Engineering is a specialist engineering consultancy for commissioning, electrical safety, testing and technical management of mission-critical infrastructure.",
      "/about",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "About", path: "/about" }])),
      },
    ],
  }),
  component: AboutPage,
});

/** "a, b and c" */
const listText = (items: string[]) =>
  items.length < 2 ? (items[0] ?? "") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About JDE" title="Engineering assurance for critical facilities" />

      {/* Story */}
      <section className="on-paper section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading light label="Who we are" title="Our story" />
          <div className="space-y-5 text-lg text-ink-muted">
            <p className="text-xl text-ink">{business.summary}</p>
            <p>{business.focus}</p>
            <p>Our authorised persons operate in accordance with {listText(standards)}.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="navy-depth section-pad">
        <div className="container-site">
          <SectionHeading label="Values" title="How we work" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="card-navy p-6 md:p-7">
                <span className="text-sm font-medium tabular-nums text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-3 text-[0.97rem] text-on-navy-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="team" className="on-paper section-pad">
        <div className="container-site">
          <SectionHeading light label="People" title="Leadership team" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name} className="card-paper overflow-hidden">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  <div
                    className="flex aspect-[4/3] items-center justify-center bg-[radial-gradient(80%_100%_at_80%_0%,#15215e_0%,#050818_70%)] font-heading text-4xl font-medium tracking-wide text-white"
                    aria-hidden="true"
                  >
                    {initials(m.name)}
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl">{m.name}</h3>
                  <p className="mt-1 text-ink-muted">{m.role}</p>
                  {m.bio && <p className="mt-3 text-[0.95rem] text-ink-muted">{m.bio}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
