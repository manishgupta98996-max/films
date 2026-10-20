import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

/**
 * Sitemap for all static routes and published blog posts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1, lastModified: now },
    { path: "/guide", changeFrequency: "weekly" as const, priority: 0.8, lastModified: now },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { path: "/showcase", changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { path: "/templates", changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.5, lastModified: now },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.4, lastModified: now },
    { path: "/refund", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
  ].map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const guidePosts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/guide/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...guidePosts];
}
