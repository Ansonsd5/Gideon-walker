/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ['Krona One', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
      },
      backgroundImage1: {
        'custom-pattern': "url('../../src/assets/background/firstbg.svg')",
      },
      colors: {
        
        background: {
          light: '#8E98A8',
          dark: '#151516BF',
        },
        text: {
          light: '#151516',
          dark: '#FFFFFF',
          bluecolor: '#35DEE1',
          greytext: '#C8C8C8',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

