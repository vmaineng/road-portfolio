"use client";
import { Section } from "./types";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const stampColors = {
  [Section.ABOUT]: "border-white dark:border-primary-dark",
  [Section.PROJECTS]: "border-white dark:border-secondary-dark",
  [Section.SOCIALS]: "border-white dark:border-accent-dark",
  [Section.CONTACT]: "border-white dark:border-orange-400",
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
    return (
      <nav className="fixed top-0 left-0 right-0 bg-primary shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-white text-xl font-bold">Mai Vang</div>
            <div className="w-8 h-8" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary dark:bg-neutralDark/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="text-white text-xl font-bold flex-shrink-0">
            <button
              onClick={() => onNavigate(Section.ABOUT)}
              className="text-white text-xl font-bold flex-shrink-0 hover:text-neutralLight transition-colors"
            >
              Mai Vang
            </button>
          </div>
          <div className="flex-1" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-neutralLight transition-colors"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8 absolute md:static top-16 left-0 right-0 bg-primary dark:bg-neutralDark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-colors duration-300`}
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
                      ? "text-white font-medium border-b-2"
                      : "text-white/90 hover:text-white"
                  } transition-colors duration-300`}
              >
                {formatLabel(section)}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block md:inline-block w-full md:w-auto text-left md:text-center px-3 py-2 md:p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-300"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
