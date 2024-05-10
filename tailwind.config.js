/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //remove unused styles
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FF5F00'
        }
      }
    }
  },
  plugins: []
}
