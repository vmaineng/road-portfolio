import React from "react";
import { LocationContent } from "./types";

export interface SectionProps {
  content: LocationContent;
}

const About: React.FC<SectionProps> = ({ content }) => {
  return (
    <section className="text-neutralDark-dark dark:text-neutralLight transition-colors duration-300">
      <h2 className="text-3xl font-extrabold text-primary dark:text-primary-dark mb-4">
        {content.title}
      </h2>
      <p className="text-lg text-neutralDark-light dark:text-neutralLight/90 italic">
        {content.subtitle}
      </p>
      <p className="mt-3 leading-relaxed text-base max-w-2xl">
        {content.description}
      </p>

      <ul className="list-none mt-6 space-y-2">
        {content.details?.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm text-neutralDark-light dark:text-neutralLight/80"
          >
            <span className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full" />
            {detail}
          </li>
        ))}
      </ul>
      {content.skills && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">
            Skills:
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {content.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-secondary/10 dark:bg-secondary-dark/20 
                           text-secondary-dark dark:text-secondary rounded-full 
                           text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
