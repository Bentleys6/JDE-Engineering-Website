/**
 * JDE's services, grouped as in the client's brief. Each group gets its own page at
 * /services/<slug>. The item lists are word for word from the brief; the summaries and
 * intros describe what each service is, without claims JDE hasn't confirmed.
 */
export type ServiceItem = { name: string; text?: string };

export type Service = {
  slug: string;
  name: string;
  /** Short name for menus. */
  short: string;
  /** One line for cards and meta descriptions. */
  summary: string;
  /** Paragraphs at the top of the service page. */
  intro: string[];
  /** Heading above the list on the service page. */
  listTitle: string;
  items: ServiceItem[];
  /** Optional note under the list (e.g. standards). */
  note?: string;
};

export const services: Service[] = [
  {
    slug: "commissioning",
    name: "Commissioning",
    short: "Commissioning",
    summary:
      "Commissioning management and engineers to take systems from installation to proven, documented handover.",
    intro: [
      "Commissioning is where a project proves it works. JDE plans, manages and delivers commissioning so that electrical and mechanical systems are tested in a controlled sequence, witnessed where required, and handed over fully operational.",
      "We can lead the commissioning process for a client or contractor, or provide commissioning engineers to support an existing team.",
    ],
    listTitle: "Commissioning services",
    items: [
      { name: "Commissioning Management" },
      { name: "Commissioning Engineers" },
      { name: "L1–L3 Commissioning Support" },
      { name: "Witness Testing" },
      { name: "Handover & Closeout Management" },
    ],
  },
  {
    slug: "electrical-safe-systems-of-work",
    name: "Electrical Safe Systems of Work (ESSoW)",
    short: "Electrical Safe Systems of Work",
    summary:
      "Client-side electrical safety, permit office management and energisation planning for live and energising sites.",
    intro: [
      "As systems are energised, a construction site becomes an electrical workplace. A robust Electrical Safe System of Work controls who can work on what, when, and under which permit.",
      "JDE sets up, runs and audits electrical safe systems of work, including acting as the Client Electrical Safety Representative and managing the permit office.",
    ],
    listTitle: "ESSoW services",
    items: [
      { name: "Client Electrical Safety Representative (CESR)" },
      { name: "Electrical Safe System of Work Management" },
      { name: "Permit Office Management" },
      { name: "Lock Out / Tag Out (LOTO)" },
      { name: "Energisation Planning" },
      { name: "Switching Programmes" },
      { name: "Risk Assessments & Method Statements" },
      { name: "Electrical Safety Audits" },
    ],
  },
  {
    slug: "authorised-persons",
    name: "Authorised & Competent Persons",
    short: "Authorised & Competent Persons",
    summary:
      "Senior Authorised Persons, HV and LV Authorised Persons, Energy Marshals and Permit Controllers for your site.",
    intro: [
      "Safe switching and controlled access to electrical systems depend on appointed, competent people. JDE provides experienced personnel to fill these safety-critical roles on your project.",
    ],
    listTitle: "Personnel we provide",
    items: [
      { name: "Senior Authorised Persons (SAP)" },
      { name: "High Voltage Authorised Persons (HVAP)" },
      { name: "Low Voltage Authorised Persons (LVAP)" },
      { name: "Competent Persons" },
      { name: "Energy Marshals" },
      { name: "Permit Controllers" },
    ],
    note: "Operating in accordance with EN 50110, the Electricity at Work Regulations, and client-specific electrical safety procedures.",
  },
  {
    slug: "electrical-testing",
    name: "Electrical Testing",
    short: "Electrical Testing",
    summary:
      "HV cable, injection, protection relay, transformer and switchgear testing, plus cable fault investigation.",
    intro: [
      "Before equipment is energised and accepted, it has to be tested and the results recorded. JDE carries out electrical testing across high- and low-voltage systems, from cables and protection to transformers and switchgear.",
    ],
    listTitle: "Testing services",
    items: [
      { name: "HV Cable Testing" },
      { name: "VLF Testing" },
      { name: "Primary Injection Testing" },
      { name: "Secondary Injection Testing" },
      { name: "Protection Relay Testing" },
      { name: "CT & VT Testing" },
      { name: "Transformer Testing" },
      { name: "Switchgear Testing" },
      { name: "Dead Testing" },
      { name: "Live Testing" },
      { name: "Cable Fault Investigation" },
    ],
  },
  {
    slug: "qa-qc",
    name: "Mechanical & Electrical QA/QC",
    short: "M&E QA/QC",
    summary:
      "Inspections, QA/QC management and defect tracking from installation through to final acceptance.",
    intro: [
      "Quality problems found at commissioning cost far more than those found during installation. JDE inspects and manages mechanical and electrical quality progressively, so defects are recorded, tracked and closed before handover.",
    ],
    listTitle: "QA/QC services",
    items: [
      { name: "Installation Inspections" },
      { name: "QA/QC Management" },
      { name: "Snagging & Defect Management" },
      { name: "Technical Compliance Audits" },
      { name: "Progressive Quality Assurance" },
      { name: "Final Acceptance Inspections" },
    ],
  },
  {
    slug: "technical-consultancy",
    name: "Technical Consultancy",
    short: "Technical Consultancy",
    summary:
      "Commissioning and energisation strategies, design reviews, due diligence and independent technical assurance.",
    intro: [
      "Many commissioning and energisation problems are set up long before site work starts. JDE advises clients and contractors from the early stages, shaping strategy and programme and providing independent technical assurance throughout.",
    ],
    listTitle: "Consultancy services",
    items: [
      { name: "Commissioning Strategy Development" },
      { name: "Energisation Strategies" },
      { name: "Commissioning Programmes" },
      { name: "Technical Due Diligence" },
      { name: "Design Reviews" },
      { name: "Constructability Reviews" },
      { name: "Client Engineering Representation" },
      { name: "Independent Technical Assurance" },
    ],
  },
  {
    slug: "data-centre-services",
    name: "Data Centre Specialist Services",
    short: "Data Centre Services",
    summary:
      "Critical power, cooling and monitoring commissioning, load bank testing and Integrated Systems Testing.",
    intro: [
      "Data centres leave no room for error: power and cooling must work together, and keep working, from day one. JDE supports data centre projects across critical power, cooling, controls and monitoring, through to Integrated Systems Testing and support on live sites.",
    ],
    listTitle: "Data centre services",
    items: [
      { name: "Live Data Centre Support" },
      { name: "Critical Power Commissioning" },
      { name: "UPS Systems" },
      { name: "MV/LV Distribution" },
      { name: "Generator Systems" },
      { name: "Chilled Water Systems" },
      { name: "CRAH & CRAC Commissioning" },
      { name: "BMS Integration" },
      { name: "EPMS Monitoring" },
      { name: "Load Bank Testing" },
      { name: "Integrated Systems Testing (IST)" },
    ],
  },
  {
    slug: "project-support",
    name: "Project Support Services",
    short: "Project Support",
    summary:
      "Commissioning scripts, ITPs, method statements, handover documentation and technical reporting.",
    intro: [
      "A system isn't handed over until the paperwork is right. JDE prepares and reviews the documentation that commissioning and handover depend on, from scripts and test plans to asset registers and O&M manuals.",
    ],
    listTitle: "Documentation and support",
    items: [
      { name: "Commissioning Documentation" },
      { name: "Method Statements" },
      { name: "Commissioning Scripts" },
      { name: "Inspection & Test Plans (ITPs)" },
      { name: "Handover Documentation" },
      { name: "Asset Registers" },
      { name: "O&M Documentation Review" },
      { name: "Technical Reporting" },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
