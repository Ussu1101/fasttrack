/**
 * FastTrack Centralized Site & SEO Configuration
 *
 * Production Canonical Domain: https://www.fasttrackfastingcalculator.com
 * Configurable via NEXT_PUBLIC_SITE_URL environment variable.
 */

export const DEFAULT_SITE_URL = "https://www.fasttrackfastingcalculator.com";

/**
 * Returns the canonical base URL for FastTrack.
 * Prioritizes NEXT_PUBLIC_SITE_URL environment variable if configured,
 * otherwise falls back to the production domain https://www.fasttrackfastingcalculator.com.
 * Guarantees no trailing slash for clean path concatenation.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return DEFAULT_SITE_URL;
}

/**
 * Generates a fully qualified absolute URL against the canonical base URL.
 * Ensures consistent leading slash normalization.
 */
export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
