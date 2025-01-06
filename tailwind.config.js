/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-950": "#0E0E0B",
        "primary-900": "#1C1C17",
        "primary-800": "#38392D",
        "primary-700": "#545544",
        "primary-600": "#70725A",
        "primary-500": "#393A2E",
        "primary-400": "#A3A58D",
        "primary-300": "#BABBAA",
        "primary-200": "#D1D2C6",
        "primary-100": "#E8E8E3",
        "primary-50": "#F3F4F1",
        "canvas": "#090B00"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

