import React from "react";
import Image from "next/image";
import Link from "next/link";

// import project1Image from "/profilePic.png";
// import project2Gif from "/profilePic.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  image: StaticImageData | string;
}

const projectsData: Project[] = [
  {
    title: "Awesome Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveDemo: "https://your-portfolio.com",
    github: "https://github.com/your-username/portfolio",
    image: "/profilePic.png",
  },
  {
    title: "Interactive Task Manager",
    description:
      "A web application for managing tasks and projects collaboratively.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://task-manager-app.com",
    github: "https://github.com/your-username/task-manager",
    image: "/profilePic.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Projects I&apos;ve Worked On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Live Demo
                      </button>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        GitHub
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
