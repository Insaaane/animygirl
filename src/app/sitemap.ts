import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/shared/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(),
      lastModified: new Date("2026-05-27"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
