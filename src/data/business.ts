/**
 * Business facts for JDE Engineering Services Ltd.
 * Sources: the client's brief (emails via the previous web designer) and Companies House.
 * Anything not confirmed by JDE is left empty and hidden on the site; don't fill gaps with guesses.
 */
export const business = {
  name: "JDE Engineering",
  legalName: "JDE Engineering Services Ltd",
  // Companies House: registered in England and Wales.
  companyNumber: "12252788",
  registeredOffice: "17 Green Lanes, London, England, N16 9BS",
  tagline: "Commissioning, electrical safety and technical assurance",
  summary:
    "JDE Engineering is a specialist engineering consultancy delivering commissioning, electrical safety, testing and technical management services for mission-critical infrastructure, including data centres, pharmaceutical, industrial and commercial facilities across the UK and Europe.",
  focus:
    "Our focus is ensuring that complex electrical and mechanical systems are installed safely, commissioned correctly, and handed over fully operational.",
  // New business enquiries go here (confirmed by JDE).
  email: "info@jdeengineering.com",
  // Job applications go here (confirmed by JDE).
  careersEmail: "cv@jdeengineering.com",
  // Josh Holland's mobile (CEO), added at the agency's request. Shown with his name.
  phoneDisplay: "+44 7490 932 862",
  phoneTel: "+447490932862",
  phoneContact: "Josh Holland, CEO",
  social: {
    linkedin: "",
  },
  // Google Business Profile link, once JDE has one. Hidden while empty.
  googleBusinessProfile: "",
  // Live domain. Turns on canonical URLs, the share image and the website in structured data.
  siteUrl: "https://jdeengineering.com",
  // From Cloudflare dashboard > Web Analytics > Add a site. Cookie-free, so no consent needed.
  cloudflareAnalyticsToken: "",
  // Web3Forms access keys (web3forms.com, free). client = JDE's own account (enquiries to info@),
  // agency = optional copy to the agency. Until client is set, the form says it isn't switched on.
  formKeys: { client: "", agency: "" },
};

export const pageTitle = (page: string) => `${page} | ${business.name}`;

/** Sectors named in JDE's brief. */
export const sectors = [
  {
    name: "Data centres",
    text: "Critical power, cooling and controls, from new build through to support on live sites.",
  },
  {
    name: "Pharmaceutical",
    text: "Regulated facilities where systems must be proven, documented and handed over correctly.",
  },
  {
    name: "Industrial",
    text: "Sites with high-voltage networks and complex electrical and mechanical systems.",
  },
  {
    name: "Commercial",
    text: "Major buildings and their electrical and mechanical services.",
  },
];

/** Where JDE delivers, from the brief. */
export const regions = [
  "United Kingdom",
  "Ireland",
  "Spain",
  "Germany",
  "Belgium",
  "Netherlands",
  "Wider European Union",
];

export const internationalDelivery =
  "Through local entities and specialist engineering teams, JDE provides compliant engineering support while managing workforce mobilisation, technical governance and project delivery across multiple jurisdictions.";

/** Standards named in the brief. Only list what JDE has confirmed. */
export const standards = [
  "EN 50110",
  "the Electricity at Work Regulations",
  "client-specific electrical safety procedures",
];
