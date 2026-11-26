import { useState } from "react";
import { images, type ImageKey } from "@/data/images";

type Props = {
  name: ImageKey;
  className?: string;
  /** Rendered width hint for the browser, e.g. "(min-width: 1024px) 40vw, 100vw". */
  sizes?: string;
  eager?: boolean;
};

/**
 * Photo from src/data/images.ts, with width/height set so the page doesn't jump while it loads,
 * lazy-loaded below the fold, and a "photo to be supplied" placeholder if the file is missing.
 */
export function Img({ name, className = "", sizes = "100vw", eager }: Props) {
  const image = images[name];
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={`flex items-center justify-center bg-navy-raised p-4 text-center text-sm text-on-navy-muted ${className}`}
      >
        Photo to be supplied
      </div>
    );
  }
  const srcSet = "srcSet" in image ? image.srcSet : undefined;
  return (
    <img
      src={image.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
