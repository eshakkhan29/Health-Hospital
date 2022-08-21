/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0054a6",

          "secondary": "#f47920",

          "accent": "#012A4A",

          "neutral": "#000000",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#22c55e",

          "warning": "#eab308",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}