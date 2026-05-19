import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { notes } from "@/data/notes";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact", "/notes"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date()
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(project.updatedAt ?? `${project.year}-01-01`)
  }));

  const noteRoutes = notes.map((note) => ({
    url: `${siteConfig.url}/notes/${note.slug}`,
    lastModified: new Date(note.updatedAt ?? note.publishedAt)
  }));

  return [...routes, ...projectRoutes, ...noteRoutes];
}
