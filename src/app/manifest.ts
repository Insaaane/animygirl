import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "Animygirl SMM",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#D9D9D9",
    theme_color: "#32404B",
    lang: "ru-RU",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
