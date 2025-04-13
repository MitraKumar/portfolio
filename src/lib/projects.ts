import { promises as fs } from "fs";

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

export const getProjects = function (): Project[] {
  return [
    {
      id: 1,
      title: "portfolio",
      subTitle:
        "This site is a comprehensive showcase of the projects and technologies I've worked with, reflecting my journey and growth as a software developer.",
      description:
        "This site is a comprehensive showcase of the projects and technologies I've worked with, reflecting my journey and growth as a software developer.",
      tech: ["Node", "JavaScript"],
      image: "/assets/projects/portfolio.png",
      links: {
        github: "https://github.com/MitraKumar/portfolio",
        liveUrl: "/",
      },
    },
    {
      id: 2,
      title: "mail-server-infra",
      subTitle:
        "Used terraform as the IAC tool for creating an AWS EC2 instance with necessary security groups for deploying a self-hosted mail server with mailcow.",
      description:
        "Used terraform as the IAC tool for creating an AWS EC2 instance with necessary security groups for deploying a self-hosted mail server with mailcow.",
      tech: ["IaC Tools (Terraform)", "AWS"],
      image: "/assets/projects/mail-server-cover-image.jpg",
      links: {
        github: "https://github.com/MitraKumar/mailcow-server-infra",
      },
    },
    {
      id: 3,
      title: "phil-o-sophy",
      subTitle:
        "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      description:
        "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      tech: ["Node", "JavaScript"],
      image: "/assets/projects/phil-o-sophy.png",
      links: {
        github: "https://github.com/MitraKumar/phil-s-osophy",
      },
    },
    {
      id: 4,
      title: "command-man",
      subTitle:
        "“Maze Solver” is a command-based game built with React/Redux. It challenges players to solve a maze using terminal-like commands.",
      description:
        "“Maze Solver” is a command-based game built with React/Redux. It challenges players to solve a maze using terminal-like commands.",
      tech: ["React", "Redux"],
      image: "/assets/projects/command-man.png",
      links: {
        github: "https://github.com/MitraKumar/command-man",
        liveUrl: "https://command-man.vercel.app/",
      },
    },
  ];
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

export const getProjectTitles = (): Array<{ title: string }> => {
  return [
    {
      title: "portfolio",
    },
    {
      title: "phil-o-sophy",
    },
    {
      title: "command-man",
    },
    {
      title: "mail-server-infra",
    },
  ];
};
