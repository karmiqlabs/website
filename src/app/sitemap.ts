import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, freq: "monthly" as const },
    { path: "/services/cloudshift", priority: 0.9, freq: "monthly" as const },
    { path: "/services/stackevolve", priority: 0.9, freq: "monthly" as const },
    { path: "/case-studies/open-source", priority: 0.7, freq: "monthly" as const },
    { path: "/case-studies/client-project", priority: 0.7, freq: "monthly" as const },
    { path: "/about", priority: 0.6, freq: "yearly" as const },
    { path: "/contact", priority: 0.8, freq: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
