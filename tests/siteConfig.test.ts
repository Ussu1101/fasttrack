import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getSiteUrl, absoluteUrl, DEFAULT_SITE_URL } from "../lib/config/site";

describe("Centralized Site & SEO Configuration", () => {
  const originalEnv = process.env.NEXT_PUBLIC_SITE_URL;

  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  });

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnv;
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    }
  });

  it("defaults to the production canonical domain with www", () => {
    expect(DEFAULT_SITE_URL).toBe("https://www.fasttrackfastingcalculator.com");
    expect(getSiteUrl()).toBe("https://www.fasttrackfastingcalculator.com");
  });

  it("respects NEXT_PUBLIC_SITE_URL environment variable when provided", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://custom-domain.com";
    expect(getSiteUrl()).toBe("https://custom-domain.com");
  });

  it("normalizes and strips trailing slashes from environment variable", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.fasttrackfastingcalculator.com///";
    expect(getSiteUrl()).toBe("https://www.fasttrackfastingcalculator.com");
  });

  it("generates correct absolute URLs with leading slash normalization", () => {
    expect(absoluteUrl("/about")).toBe("https://www.fasttrackfastingcalculator.com/about");
    expect(absoluteUrl("contact")).toBe("https://www.fasttrackfastingcalculator.com/contact");
    expect(absoluteUrl("/")).toBe("https://www.fasttrackfastingcalculator.com/");
  });
});
