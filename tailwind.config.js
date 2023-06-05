/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(212, 45%, 89%)',
        secondary: 'hsl(220, 15%, 55%)',
        tertiary: 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        body: 'Outfit, sans-serif;'
      }
    },
  },
  plugins: [],
}
