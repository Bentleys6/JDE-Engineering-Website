/**
 * Service page FAQs, keyed by service slug (services.ts).
 *
 * Draft, November 2026. Most answers explain industry terms and practice, researched from
 * published guidance (IEEE 400.2, UK Electricity at Work Regulations 1989 guidance, EN 50110
 * training material, data centre commissioning references), written in our own words.
 * Answers that describe JDE only restate facts JDE has confirmed (their service list, regions
 * and the standards their authorised persons work to).
 *
 * Don't add answers about how JDE works (vetting, mobilisation times, live-site experience,
 * safety record) until Josh has confirmed them. Those questions are listed for him in README.md.
 */
export type Faq = { q: string; a: string };

export const serviceFaqs: Record<string, Faq[]> = {
  commissioning: [
    {
      q: "What are commissioning levels L1 to L5?",
      a: "Most mission-critical projects stage commissioning in five levels. L1 is factory acceptance testing before equipment ships. L2 checks equipment on delivery and once installed. L3 covers pre-functional checks and start-up of each item. L4 is functional testing of complete systems, including their operating modes and controls. L5 is Integrated Systems Testing, proving all systems work together, including under failure scenarios. The exact scope of each level is set by each project's commissioning specification.",
    },
    {
      q: "Which commissioning levels does JDE support?",
      a: "JDE provides L1–L3 commissioning support, commissioning management and commissioning engineers. For data centres, our specialist services also include Integrated Systems Testing (L5).",
    },
    {
      q: "What is witness testing?",
      a: "A test carried out in front of the client or their representative, who observes it against an agreed procedure and signs off the results. It's common at the factory and at key stages on site, and gives the client an independent record that equipment and systems performed as specified.",
    },
    {
      q: "What does handover and closeout involve?",
      a: "Closing out remaining tests and defects, compiling test records, certificates, O&M manuals and asset registers, and formally transferring systems to the client or operator. Done well, the operator takes over a facility that is fully working and fully documented.",
    },
  ],
  "electrical-safe-systems-of-work": [
    {
      q: "What is an Electrical Safe System of Work?",
      a: "The combination of rules, appointed people, procedures and safety documents that controls work on or near electrical systems. It defines who may switch, isolate and work on equipment, and how equipment is made safe and kept safe, using permits-to-work, sanctions-for-test and lock out / tag out, before anyone works on it.",
    },
    {
      q: "What does a Client Electrical Safety Representative do?",
      a: "Represents the client on electrical safety. On a project, that typically means overseeing contractors' safe systems of work, permits and energisation activity, and making sure they meet the client's own electrical safety requirements.",
    },
    {
      q: "What is Lock Out / Tag Out (LOTO)?",
      a: "Physically locking isolation points in the off or safe position and tagging them to show who isolated the equipment and why. It stops equipment being re-energised while people are working on it.",
    },
    {
      q: "Why does energisation need to be planned?",
      a: "As systems are energised, a construction site gradually becomes a live electrical environment. Energisation planning and switching programmes set the order in which systems go live, define the boundaries between live and dead equipment, and make sure everyone on site knows what is energised.",
    },
  ],
  "authorised-persons": [
    {
      q: "What's the difference between a Senior Authorised Person, an Authorised Person and a Competent Person?",
      a: "A Senior Authorised Person (SAP) has overall responsibility for the safe operation of the electrical systems in their remit and can issue safety documents. An Authorised Person (AP) is appointed in writing to carry out switching and isolation on defined systems and to issue permits-to-work. A Competent Person carries out the work under those safety documents. Exact titles and responsibilities are set by each organisation's electrical safety rules.",
    },
    {
      q: "What is an Energy Marshal?",
      a: "On data centre and other mission-critical construction projects, the Energy Marshal controls and coordinates energisation and isolation across the site. They keep track of which systems are live and work with the commissioning team so that systems are energised in a safe, agreed sequence.",
    },
    {
      q: "What does a Permit Controller do?",
      a: "Runs the permit system day to day: issuing, recording, tracking and cancelling permits-to-work and other safety documents, so there is always a clear record of who is working on what and under which permit.",
    },
    {
      q: "Which rules do JDE's authorised persons work to?",
      a: "Our authorised persons operate in accordance with EN 50110, the Electricity at Work Regulations, and client-specific electrical safety procedures.",
    },
  ],
  "electrical-testing": [
    {
      q: "What is VLF testing?",
      a: "Very Low Frequency testing applies an AC test voltage, most commonly at 0.1 Hz, to medium and high-voltage cables. The low frequency means far less power is needed than at mains frequency, so long cable runs can be tested with portable equipment. It is guided by IEEE 400.2 and is typically used to prove new cables before energisation.",
    },
    {
      q: "What's the difference between primary and secondary injection testing?",
      a: "Primary injection passes a high test current through the primary circuit, testing the whole protection chain from current transformers through wiring to the relay and breaker. Secondary injection applies test signals directly to the relay to check its settings and operation. Projects typically use both.",
    },
    {
      q: "What's the difference between dead testing and live testing?",
      a: "Dead testing is carried out on isolated, de-energised circuits, for example continuity, insulation resistance and polarity. Live testing is carried out on energised circuits under controlled conditions, for example earth fault loop impedance and RCD operation, to confirm the installation behaves correctly in service.",
    },
    {
      q: "Why test CTs and VTs?",
      a: "Current and voltage transformers feed the protection relays and meters. Testing confirms their ratio, polarity and performance, so protection operates when it should and readings are accurate.",
    },
  ],
  "qa-qc": [
    {
      q: "What's the difference between QA and QC?",
      a: "Quality assurance (QA) is the system that makes sure work is done right: procedures, inspection and test plans, and audits. Quality control (QC) is the checking itself: inspections and tests confirming the installed work meets the specification.",
    },
    {
      q: "What is progressive quality assurance?",
      a: "Inspecting and recording quality as installation proceeds, area by area and system by system, rather than leaving it to the end. Defects are found while they are still quick and cheap to fix, and before they delay commissioning.",
    },
    {
      q: "What happens at a final acceptance inspection?",
      a: "A final check that the installation is complete, defects are closed and the required documentation is in place, so the client can formally accept the works.",
    },
  ],
  "technical-consultancy": [
    {
      q: "Why develop a commissioning strategy early?",
      a: "Commissioning affects design, procurement and programme: test points, access, temporary power, witness testing and the time testing takes. Setting the strategy early avoids redesign and late surprises that push back handover.",
    },
    {
      q: "What is a constructability review?",
      a: "A review of the design by experienced practitioners to check it can be built, installed, tested and maintained safely and practically, before those problems appear on site.",
    },
    {
      q: "What is technical due diligence?",
      a: "An independent assessment of a facility or project's design, condition and technical risks, typically for investors, buyers or lenders before they commit.",
    },
    {
      q: "What is independent technical assurance?",
      a: "Independent verification, on the client's behalf, that design, installation and testing meet the project's requirements, separate from the contractors doing the work.",
    },
  ],
  "data-centre-services": [
    {
      q: "What is Integrated Systems Testing (IST)?",
      a: "The final level of commissioning (L5). It tests the facility's power, cooling and control systems together, simulating events such as loss of mains supply, generator start and UPS transfer, to prove the data centre keeps running as designed.",
    },
    {
      q: "Why use load banks?",
      a: "Load banks simulate the electrical load and heat of IT equipment before servers are installed, so power and cooling systems can be tested at their design load.",
    },
    {
      q: "What's the difference between a CRAC and a CRAH unit?",
      a: "A CRAC (computer room air conditioner) cools with its own built-in refrigeration compressor. A CRAH (computer room air handler) uses chilled water from a central plant. Both need commissioning to prove capacity, controls and failover.",
    },
    {
      q: "What is EPMS?",
      a: "An Electrical Power Monitoring System gives operators live visibility of the electrical infrastructure, such as switchgear, UPS and generators. It sits alongside the BMS, which monitors mechanical and environmental systems.",
    },
  ],
  "project-support": [
    {
      q: "What is an Inspection & Test Plan (ITP)?",
      a: "A document listing every inspection and test for a scope of work, with the acceptance criteria, who is responsible, and the hold and witness points where work can't proceed without sign-off.",
    },
    {
      q: "What is a commissioning script?",
      a: "A step-by-step test procedure for a piece of equipment or a system, with the expected result for each step. Results are recorded against it during testing and form part of the handover record.",
    },
    {
      q: "What goes in an asset register?",
      a: "A record of the installed equipment: identifiers, locations, manufacturers, models and serial numbers, and maintenance information. The operator uses it to run and maintain the facility.",
    },
  ],
};

export const faqsFor = (slug: string): Faq[] => serviceFaqs[slug] ?? [];
