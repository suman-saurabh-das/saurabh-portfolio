/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_90: '#ccf5ff',
        blue_80: '#99ebff',
        blue_70: '#66e0ff',
        blue_60: '#33d6ff',
        blue_50: '#00ccff',
        blue_40: '#00a3cc',
        blue_30: '#007a99',
        blue_20: '#005266',
        blue_10: '#003140',
        // #002933
        gradient_blue_40: '#3ec0d5',
        gradient_blue_60: '#1a8ebf',
      }
    },
  },
  plugins: [],
}
