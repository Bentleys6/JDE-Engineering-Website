/**
 * Image files used on the site (all in public/images/).
 * JDE hasn't supplied photos yet. Add real photos of the team and their work here as they arrive
 * (WebP, -800 and -1600 versions). No stock or AI-generated images: the brief rules them out.
 */
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
  share: {
    src: "/images/share.png",
    alt: "JDE Engineering: commissioning, electrical safety and technical assurance",
    width: 1200,
    height: 630,
  },
} as const;

export type ImageKey = keyof typeof images;
