"use client";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import { CSSTransition } from "react-transition-group";
import Map from "./components/Map";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
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
          <Map onNavigate={handleNavigation} />
        </div>
        <CSSTransition
          key={currentSection}
          in={true}
          timeout={300}
          classNames="fade"
          mountOnEnter
          unmountOnExit
        >
          <div className="absolute top-0 left-0 w-full h-full">{content}</div>
        </CSSTransition>
      </main>
      <Navigation onNavigate={handleNavigation} />
    </div>
  );
}
