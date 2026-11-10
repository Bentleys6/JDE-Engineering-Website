import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { caseStudies } from "@/data/content";
import { team } from "@/data/team";

const publicDir = path.resolve(__dirname, "../../public");
const fileFor = (src: string) => path.join(publicDir, src.replace(/^\//, ""));

describe("site content", () => {
  it("every image file referenced in images.ts exists", () => {
    for (const [key, img] of Object.entries(images)) {
      expect(existsSync(fileFor(img.src)), `${key}: ${img.src}`).toBe(true);
      expect(img.alt.length, key).toBeGreaterThan(10);
    }
    for (const m of team) if (m.photo) expect(existsSync(fileFor(m.photo)), m.name).toBe(true);
  });

  it("keeps the old site's URLs, so links and rankings carry over", () => {
    const sitemap = readFileSync(path.join(publicDir, "sitemap.xml"), "utf8");
    for (const p of ["/about", "/services", "/contact"]) {
      expect(sitemap).toContain(`jdeengineering.com${p}<`);
    }
  });

  it("lists every page in the sitemap", () => {
    const sitemap = readFileSync(path.join(publicDir, "sitemap.xml"), "utf8");
    for (const p of [
      "/projects",
      "/careers",
      "/privacy-policy",
      ...services.map((s) => `/services/${s.slug}`),
    ]) {
      expect(sitemap).toContain(`jdeengineering.com${p}<`);
    }
  });

  it("service slugs are unique and every service has items", () => {
    expect(new Set(services.map((s) => s.slug)).size).toBe(services.length);
    for (const s of services) expect(s.items.length, s.slug).toBeGreaterThan(0);
  });

  it("case studies only reference real services", () => {
    const slugs = new Set(services.map((s) => s.slug));
    for (const c of caseStudies) for (const s of c.services) expect(slugs.has(s), s).toBe(true);
  });
});
