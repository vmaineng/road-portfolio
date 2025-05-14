"use client";

import React, { useState } from "react";
import { Section } from "./types";

interface NavigationProps {
  onNavigate: (section: Section) => void;
}

const sections = Object.values(Section) as Section[];

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onNavigate(sections[newIndex]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onNavigate(sections[newIndex]);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-100 shadow-md py-4 flex justify-around items-center sm:justify-center gap-4">
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Previous Stop
      </button>
      <span className="text-gray-700 font-semibold">
        {sections[currentIndex].toUpperCase()}
      </span>
      <button
        onClick={handleNext}
        disabled={currentIndex === sections.length - 1}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Next Stop
      </button>
    </div>
  );
};

export default Navigation;
