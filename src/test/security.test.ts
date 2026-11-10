import { describe, expect, it } from "vitest";
import { securityHeaders, withSecurityHeaders } from "@/lib/security-headers";

describe("security headers", () => {
  const csp = securityHeaders["Content-Security-Policy"]!;

  it("sets the standard protections", () => {
    for (const h of [
      "Content-Security-Policy",
      "Strict-Transport-Security",
      "X-Content-Type-Options",
      "X-Frame-Options",
      "Referrer-Policy",
      "Permissions-Policy",
    ]) {
      expect(securityHeaders[h], h).toBeTruthy();
    }
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
  });

  it("allows every outside service the site uses", () => {
    // Cloudflare Web Analytics (fonts are self-hosted). Add new services here and in the CSP.
    for (const host of ["https://static.cloudflareinsights.com"]) {
      expect(csp, host).toContain(host);
    }
  });

  it("adds headers without overwriting ones already set", () => {
    const res = withSecurityHeaders(
      new Response("ok", { headers: { "X-Frame-Options": "SAMEORIGIN" } }),
    );
    expect(res.headers.get("X-Frame-Options")).toBe("SAMEORIGIN");
    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
  });
});
