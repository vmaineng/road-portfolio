"use client";
import { Section } from "./types";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const stampColors = {
  [Section.ABOUT]: "border-blue-500",
  [Section.PROJECTS]: "border-green-500",
  [Section.SOCIALS]: "border-purple-500",
  [Section.CONTACT]: "border-orange-500",
};

export default function NavBar({
  activeSection,
  onNavigate,
}: {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}) {
  const { theme, setTheme } = useTheme();
  const sections = useMemo(() => Object.values(Section), []);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formatLabel = (section: Section) =>
    section.charAt(0).toUpperCase() + section.slice(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a neutral version during SSR
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-blue-600 dark:text-blue-400 text-xl font-bold">
              Mai Vang
            </div>
            <div className="w-8 h-8" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="text-blue-600 dark:text-blue-400 text-xl font-bold flex-shrink-0">
            <button
              onClick={() => onNavigate(Section.ABOUT)}
              className="text-blue-600 dark:text-blue-400 text-xl font-bold flex-shrink-0 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Mai Vang
            </button>
          </div>
          <div className="flex-1" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8`}
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  setIsMenuOpen(false);
                }}
                className={`block md:inline-block w-full md:w-auto text-left md:text-center px-3 py-2 md:p-0 
                  ${stampColors[section]}
    
                  ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  } transition-colors`}
              >
                {formatLabel(section)}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block md:inline-block w-full md:w-auto text-left md:text-center px-3 py-2 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
