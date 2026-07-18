import AboutMe from "@/components/AboutMe";
import { PageTitle } from "@/components/PageHeading";
import { SecondaryButton } from "@/components/SecondaryButton";
import Timeline from "@/components/Timeline";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function AboutPage() {
  const skillCategories = [
    {
      id: 1,
      title: "Backend Engineering",
      skills: ["PHP", "Drupal", "Laravel", "MySQL / MariaDB"],
      gradient: "from-primary to-accent",
    },
    {
      id: 2,
      title: "Frontend Technologies",
      skills: ["JavaScript (ES6+)", "React / Next.js", "HTML5 & CSS3", "Tailwind CSS / SCSS"],
      gradient: "from-accent to-secondary",
    },
    {
      id: 3,
      title: "DevOps & Cloud Systems",
      skills: ["Docker & Containers", "AWS (EC2, S3, RDS)", "Terraform (IaC)", "CI/CD & Git Actions"],
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <main className="pb-20">
      <PageTitle>About Myself</PageTitle>

      <AboutMe />

      <section className="container mx-auto mt-24 md:mt-32 px-4 max-w-5xl">
        <div className="text-center space-y-2 mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <CardContainer className="w-full" key={category.id}>
              <CardBody className="relative group/card h-80 w-full rounded-2xl p-6 glass-card select-none flex flex-col justify-between">
                <div>
                  <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${category.gradient} mb-6`}></div>
                  <CardItem
                    translateZ="30"
                    className="text-2xl font-bold text-white tracking-tight"
                  >
                    {category.title}
                  </CardItem>
                </div>
                
                <CardItem translateZ="20" className="flex flex-col gap-3 mt-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                      <span className="text-muted-foreground font-medium text-sm md:text-base">{skill}</span>
                    </div>
                  ))}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <SecondaryButton href="/projects">View My Projects</SecondaryButton>
        </div>
      </section>

      <section className="container mx-auto mt-24 md:mt-32 px-4 max-w-5xl">
        <div className="text-center space-y-2 mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-xs">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">My Journey</h2>
        </div>
        <Timeline />
      </section>
    </main>
  );
}
