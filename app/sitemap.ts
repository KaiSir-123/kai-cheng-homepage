import { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: profile.siteUrl,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${profile.siteUrl}/about/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${profile.siteUrl}/publications/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${profile.siteUrl}/research/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${profile.siteUrl}/activities/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${profile.siteUrl}/blog/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];

  const articlePages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${profile.siteUrl}/blog/${article.slug}/`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [...staticPages, ...articlePages];
}
