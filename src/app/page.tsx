"use client";
import React, { useState, useMemo } from "react";
import NavBar from "./components/Navbar";
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
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);
  const [currentSection, setCurrentSection] = useState<Section>(Section.ABOUT);

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDestination = useMemo(
    () => DESTINATIONS[currentSection].coordinates,
    [currentSection]
  );

  const content = sectionComponents[currentSection] ?? <About />;

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] bg-gray-100 p-4 md:p-8 lg:p-8">
      <main className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
        <NavBar activeSection={activeSection} onNavigate={handleNavigation} />
        <div className="mb-8 w-full flex justify-center ">
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
          <div className="w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-xl">
            {content}
          </div>
        </CSSTransition>
      </main>
      <Navigation onNavigate={handleNavigation} />
    </div>
  );
}
