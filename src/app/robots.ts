import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";
import { absoluteUrl } from "@/shared/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.siteUrl
  };
}
