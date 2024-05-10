/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //remove unused styles
  theme: {
    extend: {
      colors: {
        secondary: '#121922',
        orange: {
          primary: '#FF5F00'
        },
        yellow: {
          primary: '#FFDD00'
        }
      }
    }
  },
  plugins: []
}
