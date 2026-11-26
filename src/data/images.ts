/**
 * Image files used on the site (all in public/images/).
 * JDE's own site photos (sent 26 Nov 2026 via WhatsApp, Drive › Clients › JDE › Raw (unsorted)),
 * as WebP at 800 and 1600px. No stock or AI-generated images: the brief rules them out.
 * Confirm with Josh that each site's client allows publication before go-live.
 */
const photo = (name: string, w: number, h: number, alt: string) => ({
  src: `/images/${name}-800.webp`,
  srcSet: `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`,
  width: w,
  height: h,
  alt,
});

export const images = {
  logo: {
    src: "/images/jde-logo.svg",
    alt: "JDE Engineering logo",
    width: 1023,
    height: 117,
  },
  logoWhite: {
    src: "/images/jde-logo-white.svg",
    alt: "JDE Engineering logo",
    width: 1023,
    height: 142,
  },
  badge: {
    src: "/images/jde-badge.svg",
    alt: "JDE Engineering badge logo",
    width: 589,
    height: 589,
  },
  hvSwitching: photo(
    "hv-switching",
    1600,
    1200,
    "Two JDE engineers in arc-flash PPE switching high-voltage switchgear, with lock-out/tag-out tags in place",
  ),
  hvSwitchingPortrait: photo(
    "hv-switching-portrait",
    1200,
    1600,
    "JDE engineer in arc-flash PPE operating HV switchgear while a colleague stands by with an insulated rescue hook",
  ),
  arcFlashTeam: photo(
    "arc-flash-team",
    1200,
    1600,
    "Two JDE engineers in arc-flash suits and JDE-branded jackets inside an HV substation",
  ),
  lotoStation: photo(
    "loto-station",
    1200,
    1600,
    "Site permit office lined with lock-out/tag-out stations, including JDE Engineering's personal LOTO station",
  ),
  permitOffice: photo(
    "permit-office",
    1600,
    1200,
    "Site permit office with lock-out/tag-out boards and single-line diagrams on the walls",
  ),
  share: {
    src: "/images/share.png",
    alt: "JDE Engineering: commissioning, electrical safety and technical assurance",
    width: 1200,
    height: 630,
  },
} as const;

export type ImageKey = keyof typeof images;
