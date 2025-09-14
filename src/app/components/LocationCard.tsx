// components/LocationCard.tsx
"use client";
import React from "react";
import { LocationContent } from "./types";

interface LocationCardProps {
  content: LocationContent;
  isVisible: boolean;
  onClose: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  content,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-primary dark:border-primary-dark p-6 max-w-sm mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 active:scale-95 transition-all duration-200"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping opacity-75" />

        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-dark mb-2">
            {content.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {content.subtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Explore
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
