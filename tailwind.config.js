/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'vue-1': '#E0F2F1',
        'vue-2': '#26A69A',
        'vue-3': '#4DB6AC',
        'vue-4':  '#004D40'
      },
      spacing: {
        '60%': '60%',
        '68%': '68%',
      },
      fontFamily: {
        'Roboto': 'Roboto Mono'
      },
    },
  },
  plugins: [],
}

