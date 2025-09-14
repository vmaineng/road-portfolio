"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import { CSSTransition } from "react-transition-group";
import WorldMapGL from "./components/WordMapGL";
import { LocationCard } from "./components/LocationCard";
import { SectionProps, Section } from "./components/types";
import { DESTINATIONS, locationContent } from "./content/sections";

const sectionComponents: Record<Section, React.FC<SectionProps>> = {
  [Section.ABOUT]: About,
  [Section.PROJECTS]: Projects,
  [Section.SOCIALS]: Socials,
  [Section.CONTACT]: Contact,
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.ABOUT);
  const [showCard, setShowCard] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  const currentDestination = DESTINATIONS[currentSection].coordinates;
  const SectionComponent = sectionComponents[currentSection] || About;
  const sectionData = locationContent[currentSection];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <WorldMapGL
          onNavigate={handleNavigation}
          currentDestination={currentDestination}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar activeSection={currentSection} onNavigate={handleNavigation} />

        {showContent && (
          <div className="flex-1 flex items-center justify-center p-4">
            <CSSTransition
              key={currentSection}
              in={true}
              timeout={300}
              classNames="fade"
              mountOnEnter
              unmountOnExit
            >
              <div className="w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-xl">
                <SectionComponent content={sectionData} />
              </div>
            </CSSTransition>
          </div>
        )}
      </div>
      <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm z-20">
        <Navigation onNavigate={handleNavigation} />
      </div>

      <LocationCard
        content={locationContent[currentSection]}
        isVisible={showCard}
        onClose={handleCloseCard}
      />
    </div>
  );
}
