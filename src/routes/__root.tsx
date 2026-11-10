import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { images } from "@/data/images";
import { business, regions } from "@/data/business";
import { services } from "@/data/services";
import { Footer, Header, useRouteEffects } from "@/components/site/Layout";

function NotFoundComponent() {
  return (
    <section className="hero-glow">
      <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow text-cyan">Error 404</p>
        <h1 className="mt-4 text-4xl md:text-6xl">Sorry, that page doesn't exist.</h1>
        <p className="mt-5 text-lg text-on-navy-muted">
          Head back to the homepage, or email{" "}
          <a href={`mailto:${business.email}`} className="link-underline text-white">
            {business.email}
          </a>
          .
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page didn't load</h1>
        <p className="mt-2 text-on-navy-muted">Please try again, or email {business.email}.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn-outline-light">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const site = business.siteUrl.replace(/\/$/, "");
const organisation: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site}/#organisation`,
  name: business.name,
  legalName: business.legalName,
  description: business.summary,
  url: site,
  logo: site + images.badge.src,
  image: site + images.share.src,
  email: business.email,
  ...(business.phoneTel ? { telephone: business.phoneTel } : {}),
  areaServed: regions.map((name) => ({ "@type": "Place", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site}/services/${s.slug}` },
    })),
  },
};
const socialLinks = Object.values(business.social).filter(Boolean);
if (socialLinks.length) organisation["sameAs"] = socialLinks;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#050818" },
      { property: "og:site_name", content: business.name },
      { property: "og:locale", content: "en_GB" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organisation) },
      // Cloudflare Web Analytics: cookie-free visitor stats, only once a token is set.
      ...(business.cloudflareAnalyticsToken
        ? [
            {
              src: "https://static.cloudflareinsights.com/beacon.min.js",
              defer: true,
              "data-cf-beacon": JSON.stringify({ token: business.cloudflareAnalyticsToken }),
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useRouteEffects();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="visually-hidden focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cyan focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
