type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const CheckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2.5}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronIcon = ({
  className = "h-5 w-5",
  dir = "right",
}: P & { dir?: "left" | "right" | "down" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    {...base}
    style={{
      transform: dir === "left" ? "rotate(180deg)" : dir === "down" ? "rotate(90deg)" : undefined,
    }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const MenuIcon = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const ArrowIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PhoneIcon = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

/** Line icons for the eight service areas, keyed by service slug. */
const serviceIconPaths: Record<string, React.ReactNode> = {
  commissioning: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 13.5l2 2 4-4" />
    </>
  ),
  "electrical-safe-systems-of-work": (
    <>
      <path d="M12 3l7 3v5.5c0 4.6-3 8.1-7 9.5-4-1.4-7-4.9-7-9.5V6z" />
      <path d="M12.8 7.5 10 12.5h4l-2.8 5" />
    </>
  ),
  "authorised-persons": (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20.5c.8-3.8 3.6-6 7-6s6.2 2.2 7 6" />
    </>
  ),
  "electrical-testing": (
    <>
      <path d="M3.5 16a8.5 8.5 0 0 1 17 0" />
      <path d="M12 16l4-5.5M7 16h-1.5M18.5 16H17" />
      <circle cx="12" cy="16" r="1.2" />
    </>
  ),
  "qa-qc": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.3 15.3 20.5 20.5M8 10.5l2 2 3.5-3.5" />
    </>
  ),
  "technical-consultancy": <path d="M12 3 3 8l9 5 9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5" />,
  "data-centre-services": (
    <>
      <rect x="4" y="3.5" width="16" height="7" rx="1.5" />
      <rect x="4" y="13.5" width="16" height="7" rx="1.5" />
      <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
    </>
  ),
  "project-support": (
    <>
      <path d="M7 3h7l4 4v14H7zM14 3v4h4" />
      <path d="M10 12h5M10 15h5M10 18h3" />
    </>
  ),
};

export const ServiceIcon = ({ slug, className = "h-6 w-6" }: P & { slug: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={1.5}>
    {serviceIconPaths[slug] ?? <circle cx="12" cy="12" r="8" />}
  </svg>
);
