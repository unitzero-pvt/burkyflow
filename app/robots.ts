import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Generates /robots.txt. Paid landing pages under /lp/ are disallowed from
// indexing so they never compete with the organic /ai-automation/ canonicals.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/lp/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
