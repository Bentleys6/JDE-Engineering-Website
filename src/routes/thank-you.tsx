import { createFileRoute, Link } from "@tanstack/react-router";
import { business, pageTitle } from "@/data/business";
import { PageHeader } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    seo(pageTitle("Thank you"), "Your enquiry has been sent to JDE Engineering.", "/thank-you", {
      noindex: true,
    }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <PageHeader
      eyebrow="Enquiry sent"
      title="Thank you, we've received your enquiry"
      intro={`The right person at JDE will be in touch. If it's urgent, email ${business.email}.`}
    >
      <Link to="/" className="btn btn-primary mt-9">
        Back to the homepage
      </Link>
    </PageHeader>
  );
}
