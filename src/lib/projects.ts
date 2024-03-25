export type Project = {
  id: number,
  title: string,
  subTitle: string,
  description?: string,
  tech: string[],
  image: string,
  links: {
    github?: string,
    liveUrl?: string,
  } 
}

export const getProjects = function(): Project[] {
  return [
    {
      id: 1,
      title: "portfolio",
      subTitle: "This site is a comprehensive showcase of the projects and technologies I've worked with, reflecting my journey and growth as a software developer.",
      description: "This site is a comprehensive showcase of the projects and technologies I've worked with, reflecting my journey and growth as a software developer.",
      tech: ["Node", "JavaScript"],
      image: "/assets/projects/portfolio.png",
      links: {
        github: "https://github.com/MitraKumar/portfolio",
        liveUrl: "/"
      },
    },
    {
      id: 2,
      title: "phil-o-sophy",
      subTitle: "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      description: "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      tech: ["Node", "JavaScript"],
      image: "/assets/projects/phil-o-sophy.png",
      links: {
        github: "https://github.com/MitraKumar/phil-s-osophy",
      },
    },
    {
      id: 3,
      title: "command-man",
      subTitle: "“Maze Solver” is a command-based game built with React/Redux. It challenges players to solve a maze using terminal-like commands.",
      description: "“Maze Solver” is a command-based game built with React/Redux. It challenges players to solve a maze using terminal-like commands.",
      tech: ["React", "Redux"],
      image: "/assets/projects/command-man.png",
      links: {
        github: "https://github.com/MitraKumar/command-man",
        liveUrl: "https://command-man.vercel.app/",
      },
    },
  ];
} 