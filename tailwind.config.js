/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      colors: {
        darkBlue: 'hsla(234, 30%, 18%, 1)',
        pinkish: 'hsla(0, 100%, 70%, 1)',
        veryLightBlue: 'hsla(194, 57%, 95%, 1)',
        light: 'hsla(210, 14%, 58%, 1)'
      },
    },
  },
  plugins: [],
}