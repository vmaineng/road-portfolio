import React from "react";
import { LocationContent } from "./types";

export interface SectionProps {
  content: LocationContent;
}

const About: React.FC<SectionProps> = ({ content }) => {
  return (
    <div className="text-neutralDark-dark dark:text-neutralLight transition-colors duration-300">
      <h2 className="text-2xl font-bold text-primary dark:text-primary-dark">
        {content.title}
      </h2>
      <p className="text-neutralDark-light dark:text-neutralLight/90">
        {content.subtitle}
      </p>
      <p className="mt-2">{content.description}</p>

      <ul className="list-disc list-inside mt-4 space-y-1">
        {content.details?.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
      {content.skills && (
        <div className="mt-4">
          <h3 className="font-semibold text-primary dark:text-primary-dark">
            Skills:
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {content.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-secondary/20 dark:bg-secondary-dark/20 text-secondary-dark dark:text-secondary rounded-md text-sm font-medium transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
