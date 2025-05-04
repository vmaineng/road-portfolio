import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaEnvelope,
} from "react-icons/fa"; // Example icons
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  alt: string;
}

const socialsData: SocialLink[] = [
  {
    icon: <FaGithub size={32} />,
    href: "https://github.com/your-github-username",
    alt: "GitHub",
  },
  {
    icon: <FaLinkedin size={32} />,
    href: "https://linkedin.com/in/your-linkedin-username",
    alt: "LinkedIn",
  },
  {
    icon: <FaTwitter size={32} />,
    href: "https://twitter.com/your-twitter-handle",
    alt: "Twitter",
  },
  {
    icon: <FaTwitch size={32} />,
    href: "https://twitch.tv/your-twitch-username",
    alt: "Twitch",
  },
  {
    icon: <FaEnvelope size={32} />,
    href: "mailto:your-email@example.com",
    alt: "Email",
  },
  // Add more social links as needed
];

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Let&apos;s Connect!
        </h2>
        <div className="flex justify-center items-center gap-8">
          {socialsData.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {social.icon}
                <span className="sr-only">{social.alt}</span>{" "}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
