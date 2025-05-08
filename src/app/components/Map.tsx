"use client";
import React from "react";

interface MapProps {
  onNavigate: (section: string) => void;
}

const Map: React.FC<MapProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
      {/* Road Lines */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-gray-300 rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-1/3 h-1 bg-gray-300 -rotate-8"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1 bg-gray-300 rotate-25"></div>

      {/* Destinations */}
      <div
        onClick={() => onNavigate("about")}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full cursor-pointer flex items-center justify-center text-white text-xs font-bold hover:bg-blue-700 transition-colors duration-300"
      >
        A
      </div>
      <div className="absolute top-1/4 left-1/4 translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
        About
      </div>

      <div
        onClick={() => onNavigate("projects")}
        className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full cursor-pointer flex items-center justify-center text-white text-xs font-bold hover:bg-green-700 transition-colors duration-300"
      >
        P
      </div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
        Projects
      </div>

      <div
        onClick={() => onNavigate("socials")}
        className="absolute bottom-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full cursor-pointer flex items-center justify-center text-white text-xs font-bold hover:bg-yellow-700 transition-colors duration-300"
      >
        S
      </div>
      <div className="absolute bottom-1/4 left-1/3 translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
        Socials
      </div>

      <div
        onClick={() => onNavigate("contact")}
        className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full cursor-pointer flex items-center justify-center text-white text-xs font-bold hover:bg-red-700 transition-colors duration-300"
      >
        C
      </div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
        Contact
      </div>
    </div>
  );
};

export default Map;
