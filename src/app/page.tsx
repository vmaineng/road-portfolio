"use client";
import React, { useState, useMemo } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import { CSSTransition } from "react-transition-group";
import WorldMapGL from "./components/WordMapGL";
import { Destination, Section } from "./components/types";

const DESTINATIONS: Record<Section, Destination> = {
  [Section.ABOUT]: { label: "About Me", coordinates: [-118.2437, 34.0522] },
  [Section.PROJECTS]: { label: "Projects", coordinates: [-93.0913, 44.9545] },
  [Section.SOCIALS]: { label: "Socials", coordinates: [-89.5745, 44.5178] },
  [Section.CONTACT]: { label: "Contact", coordinates: [-123.133, 49.25] },
};

const sectionComponents: Record<Section, React.ReactNode> = {
  [Section.ABOUT]: <About />,
  [Section.PROJECTS]: <Projects />,
  [Section.SOCIALS]: <Socials />,
  [Section.CONTACT]: <Contact />,
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.ABOUT);

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
  };

  const currentDestination = useMemo(
    () => DESTINATIONS[currentSection].coordinates,
    [currentSection]
  );

  const content = sectionComponents[currentSection] ?? <About />;

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] bg-gray-100 p-4 md:p-8">
      <main className="flex-grow relative w-full max-w-screen-xl">
        <div className="mb-8 w-full md:max-w-screen-md lg:max-w-screen-lg mx-auto">
          <WorldMapGL
            onNavigate={handleNavigation}
            currentDestination={currentDestination}
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
          <div className="w-full max-w-screen-lg mx-auto">{content}</div>
        </CSSTransition>
      </main>
      <Navigation onNavigate={handleNavigation} />
    </div>
  );
}
