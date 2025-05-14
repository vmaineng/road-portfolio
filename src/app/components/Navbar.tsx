// components/NavBar.tsx
"use client";
import { Section } from "./types";
import Link from "next/link";

export default function NavBar({
  activeSection,
  onNavigate,
}: {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}) {
  const sections: Section[] = Object.values(Section);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-blue-600 text-xl font-bold">Mai Vang</div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`${
                  activeSection === section
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                } transition-colors`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
