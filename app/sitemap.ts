import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fallsmonument.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/staff",
    "/contact",
    "/gallery/companion-monuments",
    "/gallery/etchings",
    "/gallery/granite-colors",
    "/gallery/individual-monuments",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
