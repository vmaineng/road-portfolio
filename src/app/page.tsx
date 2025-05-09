"use client";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import { CSSTransition } from "react-transition-group";
import WorldMapGL from "./components/WordMapGL";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
  };

  const destinations = {
    about: { label: "About Me", coordinates: [-118.2437, 34.0522] },
    projects: { label: "Projects", coordinates: [-93.0913, 44.9545] },
    socials: { label: "Socials", coordinates: [-89.5745, 44.5178] },
    contact: { label: "Contact", coordinates: [-123.133, 49.25] },
  };

  let content;
  switch (currentSection) {
    case "about":
      content = <About />;
      break;
    case "projects":
      content = <Projects />;
      break;
    case "socials":
      content = <Socials />;
      break;
    case "contact":
      content = <Contact />;
      break;
    default:
      content = <About />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="mb-8">
          <WorldMapGL
            onNavigate={handleNavigation}
            currentDestination={destinations[currentSection].coordinates}
          />
        </div>
        <CSSTransition
          key={currentSection}
          in={true}
          timeout={300}
          classNames="fade"
          mountOnEnter
          unmountOnExit
        >
          <div>{content}</div>
        </CSSTransition>
      </main>
      <Navigation onNavigate={handleNavigation} />
    </div>
  );
}
