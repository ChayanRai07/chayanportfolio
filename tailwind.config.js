/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your project structure
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#F94892',
        gradientStart: '#ffe1a0',
        gradientMiddle: '#f67280',
        gradientEnd: '#F94892',
      },
      fontFamily: {
        intro: ['Intro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

