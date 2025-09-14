import React from "react";
import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import { FaXTwitter, FaBluesky } from "react-icons/fa6";
import { LocationContent } from "./types";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  alt: string;
}

export interface SectionProps {
  content: LocationContent;
}

const socialsData: SocialLink[] = [
  {
    icon: <FaGithub size={32} />,
    href: "https://github.com/vmaineng",
    alt: "GitHub",
  },
  {
    icon: <FaLinkedin size={32} />,
    href: "https://www.linkedin.com/in/mai-vang-swe/",
    alt: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={32} />,
    href: "https://x.com/MaiVangSWE",
    alt: "X",
  },
  {
    icon: <FaBluesky size={32} />,
    href: "https://bsky.app/profile/maiproject218.bsky.social",
    alt: "Bluesky",
  },
  {
    icon: <FaTwitch size={32} />,
    href: "https://www.twitch.tv/maialgo",
    alt: "Twitch",
  },
];

const Socials: React.FC<SectionProps> = ({ content }) => {
  return (
    <div>
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
    </div>
    // <section id="socials" className="py-12 bg-gray-800">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-2xl font-bold text-white mb-6 text-center">
    //       Let&apos;s Connect!
    //     </h2>
    //     <div className="flex justify-center items-center gap-8">
    //       {socialsData.map((social, index) => (
    //         <Link
    //           key={index}
    //           href={social.href}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <span className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
    //             {social.icon}
    //             <span className="sr-only">{social.alt}</span>{" "}
    //           </span>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Socials;
