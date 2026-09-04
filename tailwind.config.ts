import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          carbon: "#353A3E",
          pure: "#FFFFFF",
          neon: "#FE5C13",
          electric: "#561998",
        },
        // Existing semantic tokens are mapped to the Nómada Race palette so
        // components keep a consistent visual language across all three apps.
        lime: {
          50: "#FFF4EF",
          100: "#FFE7DB",
          200: "#FFC7AD",
          300: "#FE5C13",
          400: "#E94F0C",
          900: "#57210B",
        },
        orange: {
          50: "#FFF5F0",
          100: "#FFE7D9",
          200: "#FFC7AD",
          400: "#FF7A3C",
          500: "#FE5C13",
          600: "#D9460B",
          800: "#7A2106",
        },
        violet: {
          200: "#E7D7F4",
          400: "#7130A8",
          500: "#561998",
          600: "#46137E",
        },
        zinc: {
          950: "#353A3E",
          900: "#2C3135",
          800: "#454C51",
        },
      },
      borderRadius: { xl: "1.25rem", "2xl": "1.75rem", "3xl": "2.5rem", "4xl": "3.25rem" },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        display: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: { glow: "0 0 0 1px rgba(254,92,19,.18), 0 20px 60px rgba(0,0,0,.22)" },
    },
  },
  plugins: [],
};

export default config;
