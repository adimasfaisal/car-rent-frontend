/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        projectNavy: "#14213d",
        projectOrange: "#fca311",
        projectGray: "#e5e5e5"
      },
    },
  },
  plugins: [],
}
