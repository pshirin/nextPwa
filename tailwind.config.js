import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: {
            100: "#B9C9FF",
          },
        },
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)"],
      //   mono: ["var(--font-mono)"],
      // },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
