import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sushilsharda.org";

  const routes = [
    "",
    "/about",
    "/donate",
    "/apply",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/apply" || route === "/donate" ? 0.9 : 0.7,
  }));
}
