import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = await getCollection("projects");
  const papers = await getCollection("research-papers");

  // Combine projects and papers
  const items = [
    ...projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
    })),
    ...papers.map((paper) => ({
      title: paper.data.title,
      pubDate: paper.data.pubDate,
      description: paper.data.description,
      link: `/research-papers/${paper.slug}/`,
    }))
  ];

  // Sort by publication date (newest first)
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items
  });
}
