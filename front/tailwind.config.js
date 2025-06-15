/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/[locale]/*.js",
    "./src/app/[locale]/*.jsx",
    "./src/app/[locale]/*.ts",
    "./src/app/[locale]/*.tsx",
    "./src/app/[locale]/*.mdx",
    "./src/app/[locale]/*/*.js",
    "./src/app/[locale]/*/*.jsx",
    "./src/app/[locale]/*/*.ts",
    "./src/app/[locale]/*/*.tsx",
    "./src/app/[locale]/*/*.mdx",
    "./src/app/[locale]/*/*/*.js",
    "./src/app/[locale]/*/*/*.jsx",
    "./src/app/[locale]/*/*/*.ts",
    "./src/app/[locale]/*/*/*.tsx",
    "./src/app/[locale]/*/*/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        redP: "#EF3C62",
        blueP: "#B3C3F3",
        creamP: "#F3CFB3",
        blackP: "#101820",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
