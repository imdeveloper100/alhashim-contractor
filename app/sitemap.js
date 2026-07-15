import { projects } from "@/constants/projects";
import { services } from "@/constants/services";

const baseUrl = "https://al-hashim-contractor.com";

export default function sitemap() {
  const now = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/industries",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
