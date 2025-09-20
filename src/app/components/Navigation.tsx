"use client";

import React, { useEffect } from "react";
import { Section } from "./types";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const sections = Object.values(Section) as Section[];

const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  currentSection,
}) => {
  const currentIndex = sections.indexOf(currentSection);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      onNavigate(sections[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(sections[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center gap-6">
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        aria-label="Go to previous stop"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-transform text-white font-semibold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <MdOutlineSkipPrevious size={16} />
        Previous Stop
      </button>
      <span className="text-gray-800 font-semibold tracking-wide">
        {sections[currentIndex].toUpperCase()}
      </span>
      <button
        onClick={handleNext}
        disabled={currentIndex === sections.length - 1}
        aria-label="Go to next stop"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-transform text-white font-semibold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next Stop
        <MdOutlineSkipNext size={16} />
      </button>
    </div>
  );
};

export default Navigation;
