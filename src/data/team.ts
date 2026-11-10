/**
 * Leadership team, as confirmed by JDE (names and job titles).
 * Biographies and photos are to follow from JDE: add `bio` and `photo` here when they arrive.
 * Until then the site shows initials, not stock or AI-generated faces.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  /** Path under public/, e.g. "/images/team/josh-holland-800.webp". */
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Josh Holland", role: "CEO & Founder" },
  { name: "Jonston Campbell", role: "Chief Operating Officer" },
  { name: "Victoria Keates", role: "Director of Finance" },
  { name: "Sam Holland", role: "Operations Director (Testing)" },
  { name: "Sean Connolly", role: "Operations Director (Energy)" },
  { name: "Emma-Jane Bentley", role: "Executive Assistant" },
  { name: "Alexandra Murtagh", role: "Operations Assistant" },
];

export const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
