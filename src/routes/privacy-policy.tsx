import { createFileRoute } from "@tanstack/react-router";
import { business, pageTitle } from "@/data/business";
import { seo } from "@/lib/seo";
import { PageHeader } from "@/components/site/Blocks";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo(
      pageTitle("Privacy Policy"),
      `How ${business.legalName} handles personal data sent to us through this website.`,
      "/privacy-policy",
    ),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="on-paper section-pad">
        <div className="container-site max-w-3xl space-y-10 text-lg [&_h2]:mb-3 [&_h2]:text-2xl">
          <div>
            <h2>Who we are</h2>
            <p>
              {business.legalName}, registered in England and Wales (company no.{" "}
              {business.companyNumber}), registered office {business.registeredOffice}. Contact:{" "}
              {business.email}. We are responsible for personal data sent to us through this
              website.
            </p>
          </div>
          <div>
            <h2>What we collect</h2>
            <p>
              This website has no forms and doesn't collect personal data itself. If you email us or
              send a CV, we receive the details you choose to include.
            </p>
          </div>
          <div>
            <h2>Why we use it</h2>
            <p>
              To reply to your enquiry, and for job applications, to consider you for current and
              future roles. Lawful basis: our legitimate interest in responding to people who
              contact us.
            </p>
          </div>
          <div>
            <h2>Cookies and analytics</h2>
            <p>This website doesn't use advertising or tracking cookies.</p>
            {business.cloudflareAnalyticsToken && (
              <p className="mt-3">
                We use Cloudflare Web Analytics to count visits to each page. It does not use
                cookies or identify you.
              </p>
            )}
          </div>
          <div>
            <h2>How long we keep it</h2>
            <p>Enquiries: up to 2 years after our last contact. CVs: up to 12 months.</p>
          </div>
          <div>
            <h2>Your rights</h2>
            <p>
              You can ask to see, correct or delete your data by emailing {business.email}. You can
              complain to the Information Commissioner's Office at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                ico.org.uk
              </a>
              .
            </p>
          </div>
          <p className="text-ink-muted">Last updated: November 2026.</p>
        </div>
      </section>
    </>
  );
}
