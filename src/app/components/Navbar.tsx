"use client";
import { Section } from "./types";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
            <div className="text-xl font-bold">Your Logo</div>
            <button className="p-2 rounded-lg bg-gray-200" aria-hidden="true">
              &nbsp;
            </button>
          </div>
        </div>
      </nav>
    );
  }

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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    onNavigate(section);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  } px-3 py-2 rounded-md text-left transition-colors`}
                >
                  {formatLabel(section)}
                </button>
              ))}

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-3 py-2 rounded-md text-left text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {theme === "dark"
                  ? "Switch to Light Theme"
                  : "Switch to Dark Theme"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
