import { Image, Link } from "@heroui/react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A responsive web app built with React and Tailwind CSS.",
      image: "/project1.jpg",
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
      image: "/project3.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "/project-details",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
