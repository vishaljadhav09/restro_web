import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        serif:   ['"Cormorant Garamond"', "serif"],
        sans:    ["Jost", "sans-serif"],
      },
      colors: {
        cream:  { DEFAULT: "#f4f0ec", light: "#f0e6d7", pure: "#ffffff" },
        brown:  { DEFAULT: "#885133", dark: "#5c3420", mid: "#a8673f", light: "#c4916a" },
        red:    { DEFAULT: "#d62300", dark: "#a81b00", light: "#f03010" },
        beige:  "#f0e6d7",
        sand:   "#e0d4c0",
        charcoal: { DEFAULT: "#1e1008", soft: "#3d2010", light: "#7a5030" },
      },
      boxShadow: {
        warm:  "0 2px 20px rgba(136,81,51,0.10)",
        card:  "0 8px 40px rgba(136,81,51,0.12)",
        red:   "0 6px 28px rgba(214,35,0,0.25)",
        lift:  "0 20px 60px rgba(136,81,51,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
