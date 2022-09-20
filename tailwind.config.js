/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      colors: {
        primary: {
          red: '#ED1C24',
          teal: '#2CD5C4',
          blue: '#0047BB',
        },
      },
    },
  },
  plugins: [],
};
