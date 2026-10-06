import { projects } from "./content/projects";
import { buildSitemapEntries } from "./lib/seo";

export default function sitemap() {
  return buildSitemapEntries(projects);
}
