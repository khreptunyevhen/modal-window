/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      header: ["Share Tech Mono", "monospace"],
    },
    extend: {
      colors: {
        main: "#0009",
        blueButton: "#1899D6",
      },
    },
  },
  plugins: [],
};
