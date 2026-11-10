import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { ChevronIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "./Icons";
import { PhoneLink } from "./PhoneLink";
import { setupScrollReveal } from "@/lib/reveal";
import { captureLeadSource } from "@/lib/lead-source";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
] as const;

function Logo({ className }: { className: string }) {
  const img = images.logoWhite;
  return (
    <img src={img.src} alt={img.alt} width={img.width} height={img.height} className={className} />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  const linkCls =
    "px-3.5 py-2 text-[0.95rem] font-medium text-on-navy-muted transition-colors hover:text-white";
  const activeCls = { className: "!text-white" };
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" aria-label={`${business.name} home`} className="shrink-0">
          <Logo className="h-[22px] w-auto md:h-7" />
        </Link>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          {nav.map((n) =>
            n.to === "/services" ? (
              <div key={n.to} className="group relative">
                <Link
                  to="/services"
                  className={`${linkCls} inline-flex items-center gap-1.5`}
                  activeProps={activeCls}
                >
                  Services <ChevronIcon dir="down" className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-80 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-[10px] border border-line bg-navy-raised p-2 shadow-2xl">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block rounded-md px-3 py-2.5 text-[0.95rem] text-on-navy-muted hover:bg-white/5 hover:text-white"
                        >
                          {s.short}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={n.to} to={n.to} className={linkCls} activeProps={activeCls}>
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" hash="enquiry" className="btn btn-primary">
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-navy lg:hidden"
        >
          <ul className="container-site py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="block py-2.5 font-heading text-2xl font-medium">
                  {n.label}
                </Link>
                {n.to === "/services" && (
                  <ul className="mb-2 border-l border-line pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block py-2 text-on-navy-muted"
                        >
                          {s.short}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pb-2 pt-4">
              <Link to="/contact" hash="enquiry" className="btn btn-primary w-full">
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const fl = "text-on-navy-muted transition-colors hover:text-white";
  return (
    <footer className="border-t border-line bg-navy-deep">
      <div className="container-site grid gap-10 pb-12 pt-16 md:grid-cols-[1.4fr_1fr_0.8fr_1fr] md:pt-20">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-6 max-w-sm text-[0.95rem] text-on-navy-muted">{business.tagline}.</p>
          <p className="mt-2 max-w-sm text-[0.95rem] text-on-navy-muted">
            Mission-critical facilities across the UK and Europe.
          </p>
        </div>
        <div>
          <h2 className="eyebrow mb-5 text-white">Services</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className={fl}>
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-5 text-white">Company</h2>
          <ul className="space-y-2.5 text-[0.95rem]">
            {nav
              .filter((n) => n.to !== "/services")
              .map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className={fl}>
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/contact" className={fl}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className={fl}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-5 text-white">Contact</h2>
          <ul className="space-y-3 text-[0.95rem]">
            {business.phoneTel && (
              <li>
                <span className="block text-sm text-on-navy-muted">{business.phoneContact}</span>
                <PhoneLink className="inline-flex items-center gap-2 text-white hover:underline">
                  <PhoneIcon className="h-4 w-4 shrink-0" /> {business.phoneDisplay}
                </PhoneLink>
              </li>
            )}
            <li>
              <span className="block text-sm text-on-navy-muted">New business</span>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 break-all text-white hover:underline"
              >
                <MailIcon className="h-4 w-4 shrink-0" /> {business.email}
              </a>
            </li>
            <li>
              <span className="block text-sm text-on-navy-muted">Careers</span>
              <a
                href={`mailto:${business.careersEmail}`}
                className="inline-flex items-center gap-2 break-all text-white hover:underline"
              >
                <MailIcon className="h-4 w-4 shrink-0" /> {business.careersEmail}
              </a>
            </li>
            {business.social.linkedin && (
              <li>
                <a
                  href={business.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={fl}
                >
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="container-site">
        <div className="flex flex-col gap-2 border-t border-line py-8 text-sm text-on-navy-muted md:flex-row md:justify-between md:gap-8">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p>
            Registered in England and Wales, company no. {business.companyNumber}. Registered
            office: {business.registeredOffice}.
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Scroll to top on route change, or to the #hash element, and set up scroll reveal. */
export function useRouteEffects() {
  const location = useLocation();
  const first = useRef(true);
  useEffect(() => {
    captureLeadSource();
  }, []);
  useEffect(() => {
    const hash = location.hash;
    let stopReveal = () => {};
    const t = window.setTimeout(() => {
      const el = hash ? document.getElementById(hash) : null;
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 88,
          behavior: first.current ? "auto" : "smooth",
        });
      } else if (!first.current) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      first.current = false;
      // After the scroll position is settled, so "below the fold" is measured on the new page.
      stopReveal = setupScrollReveal();
    }, 50);
    return () => {
      window.clearTimeout(t);
      stopReveal();
    };
  }, [location.pathname, location.hash]);
}
