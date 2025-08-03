/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1280px" },
      lg: { min: "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
