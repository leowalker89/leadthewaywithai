import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        // Theme-aware tokens (driven by CSS vars in globals.css)
        bg: "var(--bg)",
        fg: "var(--fg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--border)",
        muted: "var(--muted)",
        // Colorado / Western earth-tone family (design-guide.md §4)
        cream: "#F0EEE6",
        sand: {
          DEFAULT: "#E4DBC8",
          50: "#F5F2EA",
          100: "#ECE6D9",
          200: "#E4DBC8",
          300: "#D6C9AE",
        },
        sage: {
          400: "#9DAE7B",
          500: "#788C5D",
          600: "#647349",
        },
        olive: {
          500: "#4A5C3A",
          600: "#3C4B2F",
        },
        slateblue: {
          400: "#88A4BF",
          500: "#6A8CAE",
          600: "#577693",
        },
        clay: {
          400: "#B98870",
          500: "#A8755A",
          600: "#8C6049",
        },
        terracotta: {
          400: "#E08B6E",
          500: "#D97757",
          600: "#C2613F",
        },
        // Warm charcoal / browns for dark mode + ink
        charcoal: {
          DEFAULT: "#23211C",
          base: "#1A1815",
          surface: "#262320",
          raised: "#322E29",
        },
        taupe: {
          400: "#8A8475",
          500: "#7A7466",
        },
        ink: "#23211C",
        bone: "#F0EEE6",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "75rem", // 1200px
        prose: "45rem", // 720px
      },
    },
  },
  plugins: [],
};

export default config;
