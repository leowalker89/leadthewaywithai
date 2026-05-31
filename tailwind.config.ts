import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "460px",
      },
      colors: {
        // Colorado-inspired earth-tone palette
        sand: {
          50: "#faf7f1",
          100: "#f3ece0",
          200: "#e6d8c3",
          300: "#d6bf9d",
          400: "#c4a275",
        },
        sage: {
          400: "#8a9a7b",
          500: "#6f8060",
          600: "#586a4c",
          700: "#46553d",
        },
        slate: {
          400: "#7689a0",
          500: "#5a6e87",
          600: "#48586d",
          700: "#3a4757",
          800: "#2c3744",
        },
        terracotta: {
          400: "#c46b4f",
          500: "#ab5639",
          600: "#8f4530",
        },
        ink: "#2b2620",
        bone: "#fdfbf6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "68rem",
      },
    },
  },
  plugins: [],
};

export default config;
