/**
 * Page copy for JDE Engineering: values, how we work, projects and careers.
 * Project case studies and job roles are empty until JDE supplies them; the pages
 * show an honest "ask us" message instead of invented examples.
 */

/** Values for the About page. Draft wording, to be confirmed by JDE. */
export const values = [
  {
    title: "Safety first",
    text: "Electrical safety is not negotiable. Safe systems of work, proper authorisation and clear control come before programme.",
  },
  {
    title: "Technical rigour",
    text: "Systems are tested properly, results are recorded properly, and nothing is signed off on assumption.",
  },
  {
    title: "Clear accountability",
    text: "Every scope has an owner. Clients know who is responsible, what has been done and what is outstanding.",
  },
  {
    title: "Complete handover",
    text: "The job isn't finished until systems are fully operational and the documentation is complete.",
  },
];

/** The project stages JDE covers, for the homepage. Draws only on the services list. */
export const lifecycle = [
  {
    step: "01",
    title: "Strategy & design review",
    text: "Commissioning and energisation strategies, design and constructability reviews, technical due diligence.",
  },
  {
    step: "02",
    title: "Installation quality",
    text: "Installation inspections, progressive QA/QC, and snagging and defect management.",
  },
  {
    step: "03",
    title: "Energisation & safety",
    text: "Electrical safe systems of work, permit office, switching programmes and authorised persons.",
  },
  {
    step: "04",
    title: "Testing & commissioning",
    text: "Electrical testing, L1–L3 commissioning, witness testing and Integrated Systems Testing.",
  },
  {
    step: "05",
    title: "Handover & closeout",
    text: "Handover documentation, asset registers, O&M review and final acceptance.",
  },
];

/**
 * Case studies. Kept anonymous by design: describe the site by type, country and a site code
 * (e.g. "LON-01"), never the client's or operator's name, unless the client has agreed in writing.
 * Leave the list empty until JDE supplies real projects.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  /** e.g. "Data centre", "Pharmaceutical". */
  sector: string;
  /** e.g. "Ireland". */
  location: string;
  /** Anonymised site reference, e.g. "DUB-02". */
  siteCode?: string;
  /** Service slugs from services.ts. */
  services: string[];
  background: string;
  scope: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [];

export const projectsConfidentiality =
  "Much of our work is on sites where clients and operators require confidentiality. Our case studies describe the type of facility, the country and the scope we delivered, without naming the client or the site.";

/** Live job roles. Leave empty when nothing is open. */
export type JobRole = {
  title: string;
  location: string;
  /** e.g. "Contract", "Permanent". */
  type: string;
  summary: string;
};

export const jobRoles: JobRole[] = [];
