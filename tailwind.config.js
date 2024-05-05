/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        text: "#475569",
        primary: "#94A3B8",
        secondary: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
