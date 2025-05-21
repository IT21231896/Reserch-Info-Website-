/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // enables auto-theme switching
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // green palette
        secondary: '#1B5E20',
      }
    },
  },
  plugins: [],
}
