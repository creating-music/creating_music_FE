/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "u-gray-100": "#e4e4e7",
        "u-gray-200": "#a1a1aa",
        "u-gray-300": "#52525b",
        "u-gray-400": "#27272a",
        "u-gray-500": "#18181b",
        pink: "#FB27FF",
        cyan: "#27F2FF",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
