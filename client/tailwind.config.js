// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        'hostel': {
          'pink': '#FDE6EE',
          'mauve': '#D8B2C6',
          'blue': '#ADBDDE',
          'purple': '#9B70A0',
          'dark': '#5A5182',
        },
        primary: {
          50: "#e8f1ff",
          100: "#c5d8ff",
          200: "#9dbbff",
          300: "#749cff",
          400: "#4b7dff",
          500: "#245eff",
          600: "#1e4edb",
          700: "#163baf",
          800: "#0f2a83",
          900: "#0a1b5c",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg,rgb(23, 85, 254) 0%, #4b7dff 100%)",
      },
    },
  },
  plugins: [],
};
