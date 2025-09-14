"use client";
import { Section } from "./types";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const stampColors = {
  [Section.ABOUT]: "border-primary dark:border-primary-dark",
  [Section.PROJECTS]: "border-secondary dark:border-secondary-dark",
  [Section.SOCIALS]: "border-accent dark:border-accent-dark",
  [Section.CONTACT]: "border-orange-500", // Keep this as fallback or create custom color
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
      <nav className="fixed top-0 left-0 right-0 bg-neutralLight shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-primary text-xl font-bold">Mai Vang</div>
            <div className="w-8 h-8" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutralLight/90 dark:bg-neutralDark/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="text-primary dark:text-primary-dark text-xl font-bold flex-shrink-0">
            <button
              onClick={() => onNavigate(Section.ABOUT)}
              className="text-primary dark:text-primary-dark text-xl font-bold flex-shrink-0 hover:text-primary-dark dark:hover:text-primary transition-colors"
            >
              Mai Vang
            </button>
          </div>
          <div className="flex-1" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutralDark-light dark:text-neutralLight hover:text-primary dark:hover:text-primary-dark transition-colors"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8 absolute md:static top-16 left-0 right-0 bg-neutralLight dark:bg-neutralDark md:bg-transparent md:dark:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-colors duration-300`}
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
                      ? "text-primary dark:text-primary-dark font-medium"
                      : "text-neutralDark-light dark:text-neutralLight hover:text-primary dark:hover:text-primary-dark"
                  } transition-colors duration-300`}
              >
                {formatLabel(section)}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block md:inline-block w-full md:w-auto text-left md:text-center px-3 py-2 md:p-2 rounded-full hover:bg-neutralLight dark:hover:bg-neutralDark transition-colors duration-300"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
