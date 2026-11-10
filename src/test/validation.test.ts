import { describe, expect, it } from "vitest";
import { isEmail } from "@/lib/validation";
import { enquiry } from "@/data/enquiry";
import { services } from "@/data/services";

describe("enquiry form", () => {
  it("accepts real email addresses and rejects broken ones", () => {
    expect(isEmail("josh@jdeengineering.com")).toBe(true);
    expect(isEmail(" name.surname@company.co.uk ")).toBe(true);
    expect(isEmail("josh@")).toBe(false);
    expect(isEmail("josh jdeengineering.com")).toBe(false);
  });

  it("offers every service plus a 'not sure' option", () => {
    expect(enquiry.serviceOptions).toHaveLength(services.length + 1);
    expect(enquiry.locationOptions).toContain("United Kingdom");
    expect(enquiry.locationOptions.at(-1)).toBe("Other");
  });
});
