import {
  Image,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@heroui/react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A responsive web app built with React and Tailwind CSS.",
      image: "/project4.jpg",
      tech: ["React", "Tailwind", "API"],
      link: "/project-details",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A full-stack application using Next.js and MongoDB.",
      image: "/project2.jpg",
      tech: ["Next.js", "MongoDB", "Node.js"],
      link: "/project-details",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A portfolio site with animations and dark mode support.",
      image: "/project4.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/project-details",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 ">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card key={`${project.id}-${project.title}`}>
            <CardHeader className="flex-col items-start">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <Chip key={index}>{tech}</Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Link href={project.link}>View Project →</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
