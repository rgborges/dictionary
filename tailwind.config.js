/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, ts, js}',
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "IBM Plex Sans, sans-serif"
      }
    },
  },
  plugins: [],
}

