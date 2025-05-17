"use client";
import { Section } from "./types";
import { useMemo } from "react";
import { useTheme } from "next-themes";

export default function NavBar({
  activeSection,
  onNavigate,
}: {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}) {
  const { theme, setTheme } = useTheme();
  const sections = useMemo(() => Object.values(Section), []);

  const formatLabel = (section: Section) =>
    section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-blue-600 dark:text-blue-400 text-xl font-bold">
            Mai Vang
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`${
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
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
