import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C06E",
          dark: "#9B7A2A",
        },
        surface: {
          DEFAULT: "#141414",
          raised: "#1a1a1a",
          border: "#242424",
        },
      },
      fontFamily: {
        sans: ["'Pretendard Variable'", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
