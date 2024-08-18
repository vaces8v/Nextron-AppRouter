const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/app/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [require("tailwindcss-animate")],
}
