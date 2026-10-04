import { MetadataRoute } from "next";
import { PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { GUIDES } from "@/lib/content/guidesData";
import { getSiteUrl } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  // Core static pages
  const staticPages = [
    "",
    "/fasting-methods",
    "/guides",
    "/faq",
    "/medical-disclaimer",
    "/privacy",
    "/terms",
    "/about",
    "/contact",
    "/fasting-stages",
    "/alternate-day-fasting",
    "/electrolytes-while-fasting",
    "/intermittent-fasting-plateau",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/fasting-methods") ? 0.9 : 0.8,
  }));

  // Dynamic protocol pages
  const protocolPages = PROTOCOL_LIST.map((protocol) => ({
    url: `${baseUrl}/fasting-methods/${protocol.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic guide pages
  const guidePages = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...protocolPages, ...guidePages];
}
