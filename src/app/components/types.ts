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