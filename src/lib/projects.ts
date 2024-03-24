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
      title: "phil-o-sophy",
      subTitle: "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      description: "This is a simple package which just generates random quotes from Phil Dunphy, the lovable and hilarious character from the TV show Modern Family",
      tech: ["Node", "JavaScript"],
      image: "/assets/projects/command-man.png",
      links: {
        github: "https://github.com/MitraKumar/phil-s-osophy",
      },
    },
    {
      id: 2,
      title: "command-man",
      subTitle: "Used react/redux for creating simple command based game maze solving game.",
      description: "Used react/redux for creating simple command based game maze solving game.",
      tech: ["React", "Redux"],
      image: "/assets/projects/command-man.png",
      links: {
        github: "https://github.com/MitraKumar/command-man",
        liveUrl: "https://command-man.vercel.app/",
      },
    },
  ];
} 