import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.fallsmonument.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/contact/success",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
