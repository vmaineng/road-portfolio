import { Destination, Section, LocationContent } from "../components/types";

export const DESTINATIONS: Record<Section, Destination> = {
  [Section.ABOUT]: { label: "About Me", coordinates: [-118.2437, 34.0522] },
  [Section.PROJECTS]: { label: "Projects", coordinates: [-93.0913, 44.9545] },
  [Section.SOCIALS]: { label: "Socials", coordinates: [-89.5745, 44.5178] },
  [Section.CONTACT]: { label: "Contact", coordinates: [-123.133, 49.25] },
};

export const locationContent: Record<Section, LocationContent> = {
  [Section.ABOUT]: {
    id: "about",
    title: "About Me",
    subtitle: "Los Angeles, CA",
    description:
      "I’m a Web UI Develope focused on implementation.",
    details: [
      "2+ years of experience in web development",
      "Specialized in taking UI/UX designs and translating them into clean, semantic, and performant code",
      "Passionate about user experience and journey through web pages",
    ],
    skills: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
    image:
      "https://images.unsplash.com/photo-1711470090847-066c1b486bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3MlMjBhbmdlbGVzJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc1NzcyNDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  [Section.PROJECTS]: {
    id: "projects",
    title: "My Projects",
    subtitle: "Minneapolis, MN",
    description:
      "Check out my portfolio of projects ranging from web applications to open source contributions.",
    details: [
      "Built responsive web applications",
      "Contributed to open source projects",
      "Implemented complex data visualizations",
    ],
    links: [
      {
        label: "Project Repository",
        url: "https://github.com/vmaineng",
        type: "github",
      },
    ],
    skills: ["React", "Nextjs", "Typescript", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1535082049017-5a7b43f3bcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5uZWFwb2xpcyUyMG1pbm5lc290YXxlbnwxfHx8fDE3NTc3MjQ3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  [Section.SOCIALS]: {
    id: "socials",
    title: "My Socials",
    subtitle: "Wisconsin",
    description:
      "Connect with me on various social platforms to stay updated with my latest work and insights.",
    details: [
      "Regular content on web development",
      "Tech tutorials and tips",
      "Open source contributions",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/vmaineng", type: "github" },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/mai-vang-swe",
        type: "linkedin",
      },
      {
        label: "Twitch",
        url: "https://twitch.tv/maiproject218",
        type: "external",
      },
    ],
    skills: ["UX Experience", "Content Creation", "Technical Writing"],
    image:
      "https://images.unsplash.com/photo-1716616372378-768a13ad517e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwd2FzaGluZ3RvbnxlbnwxfHx8fDE3NTc3MjQ3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  [Section.CONTACT]: {
    id: "contact",
    title: "Contact Me",
    subtitle: "Vancouver, BC",
    description:
      "Feel free to reach out for collaboration, job opportunities, or just to say hello!",
    details: [
      "Available for freelance projects",
      "Open to full-time opportunities",
      "Always interested in tech discussions",
    ],
    links: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/mai-vang-swe",
        type: "linkedin",
      },
    ],
    skills: ["Communication", "Project Management", "Team Collaboration"],
    image:
      "https://images.unsplash.com/photo-1604394089666-6d365c060c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc1NzcyNDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
};
