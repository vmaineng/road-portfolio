export enum Section {
    ABOUT = "about",
    PROJECTS = "projects",
    SOCIALS = "socials",
    CONTACT = "contact",
  }
  
  export type Destination = {
    label: string;
    coordinates: [number, number];
  };

  export interface LocationContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  links?: Array<{
    label: string;
    url: string;
    type: "external" | "github" | "linkedin" | "email";
  }>;
  skills?: string[];
  image?: string;
}