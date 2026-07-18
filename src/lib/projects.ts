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
        image: proj.entry.image,
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
    const file_data = await fs.readFile(
      `${process.cwd()}/src/data/projects/${title}.md`,
      "utf8",
    );
    return file_data;
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
