/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e3a5b',
        accent: '#b33951',
        light: '#5fa8d3'
      }
    }
  },
  plugins: []
}
