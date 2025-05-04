/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a7f3d0",
        secondary: "#f59e9b",
        accent: "#facc15",
        neutralLight: "#f7f7f7",
        neutralDark: "#6b7280",
      },
    },
  },
  plugins: [],
};
