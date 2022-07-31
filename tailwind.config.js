/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_80: '#003140',
        blue_60: '#286f9e',
        blue_40: '#00b2df',
        blue_20: '#99ebff',
        gradient_blue_40: '#3ec0d5',
        gradient_blue_60: '#1a8ebf',
      }
    },
  },
  plugins: [],
}
