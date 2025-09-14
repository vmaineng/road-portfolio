/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a7f3d0",
          dark: "#10b981",
        },
        secondary: {
          DEFAULT: "#f59e9b",
          dark: "#ef4444",
        },
        accent: {
          DEFAULT: "#facc15",
          dark: "#eab308",
        },
        neutralLight: {
          DEFAULT: "#f7f7f7",
          dark: "#e5e5e5",
        },
        neutralDark: {
          light: "#6b7280",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
};
