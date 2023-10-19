/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'vue-2': '#26A69A',
        'vue-3': '#4DB6AC',
        'vue-4':  '#004D40'
      }
    },
  },
  plugins: [],
}

