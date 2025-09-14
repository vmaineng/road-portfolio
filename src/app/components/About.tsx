import React from "react";
import { LocationContent } from "./types";

export interface SectionProps {
  content: LocationContent;
}

const About: React.FC<SectionProps> = ({ content }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{content.title}</h2>
      <p className="text-gray-600">{content.subtitle}</p>
      <p className="mt-2">{content.description}</p>

      <ul className="list-disc list-inside mt-4">
        {content.details?.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
      {content.skills && (
        <div className="mt-4">
          <h3 className="font-semibold">Skills:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {content.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-200 rounded-md text-sm"
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
