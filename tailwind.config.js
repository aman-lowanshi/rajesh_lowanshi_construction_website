/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a192f', // Dark blue
          accent: '#f97316', // Orange
          light: '#ffffff', // White
          gray: '#f3f4f6' // Light gray for sections
        }
      }
    },
  },
  plugins: [],
}
