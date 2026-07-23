/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14532D", // Primary Green
          light: "#1E6B3C",
        },
        secondary: {
          DEFAULT: "#16A34A", // Secondary Green
        },
        bg: {
          DEFAULT: "#F8FAFC", // Light Background
        },
        card: {
          DEFAULT: "#FFFFFF", // White Card
        },
        text: {
          primary: "#14532D",   // Primary Text
          secondary: "#64748B", // Secondary Text
        },
        border: {
          DEFAULT: "#E2E8F0",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(20, 83, 45, 0.04), 0 1px 3px 0 rgba(20, 83, 45, 0.06)",
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};
