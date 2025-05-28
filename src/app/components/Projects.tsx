import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  website?: string;
  github?: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    website: "https://road-portfolio.vercel.app/",
    github: "https://github.com/vmaineng/road-portfolio",
    image: "/profilePic.png",
  },
  {
    title: "JD-AI (Solo Project)",
    description:
      "A web application to help users prepare for behavorial technical interviews",
    technologies: ["React", "Open AI API", "Supabase", "Google OAuth"],
    website: "https://jd-ai.vercel.app/",
    // github: "https://github.com/vmaineng/rephrase-statuses",
    image: "/jd.png",
  },
  {
    title: "GridIron Survivor (Group Project)",
    description:
      "An apprenticeship program for self-taught individuals. On this group project, I implemented Playwright testing, contributed to code reviews, implemented functionalities such as Spinner when page was loading",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Appwrite",
      "Jest",
      "Playwright",
    ],
    website: "https://www.gridironsurvivor.com/",
    github: "https://github.com/LetsGetTechnical/gridiron-survivor",
    image: "/gridiron.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-4 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Projects I&apos;ve Worked On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill={true}
                  style={{ objectFit: "cover" }}
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
                  {project.website && (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Website
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
