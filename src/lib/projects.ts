import { createReader } from "@keystatic/core/reader";
import { promises as fs } from "fs";
import keystaticConfig from "@/../keystatic.config";

export type Project = {
  id: number;
  title: string;
  subTitle: string;
  description?: string;
  tech: string[];
  image: string;
  links: {
    github?: string;
    liveUrl?: string;
  };
};

const reader = createReader(process.cwd(), keystaticConfig);

export const getProjects = async function (): Promise<Project[]> {
  try {
    const projectsData = await reader.collections.projects.all();
    return projectsData
      .map((proj) => ({
        id: Number(proj.entry.id),
        title: proj.slug,
        subTitle: proj.entry.subTitle,
        description: proj.entry.description || undefined,
        tech: [...proj.entry.tech],
        image: proj.entry.image || "/assets/projects/portfolio.png",
        links: {
          github: proj.entry.links.github || undefined,
          liveUrl: proj.entry.links.liveUrl || undefined,
        },
      }))
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Error reading projects from Keystatic:", error);
    return [];
  }
};

export const getProjectWithTitle = async (title: string): Promise<string> => {
  try {
    let file_data = "";
    try {
      file_data = await fs.readFile(
        `${process.cwd()}/src/data/projects/${title}.md`,
        "utf8",
      );
    } catch {
      file_data = await fs.readFile(
        `${process.cwd()}/src/data/projects/${title}.mdoc`,
        "utf8",
      );
    }
    const regex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
    return file_data.replace(regex, "");
  } catch (error) {
    return "";
  }
};

export const getProjectTitles = async (): Promise<Array<{ title: string }>> => {
  try {
    const slugs = await reader.collections.projects.list();
    return slugs.map((slug) => ({
      title: slug,
    }));
  } catch (error) {
    return [];
  }
};
