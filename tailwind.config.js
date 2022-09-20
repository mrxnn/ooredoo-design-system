/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
        notosans: 'Noto Sans',
        outfit: 'Outfit',
      },
      colors: {
        primary: {
          red: '#ED1C24',
          cherry: '#D6001C',
          teal: '#2CD5C4',
          blue: '#0047BB',
        },
        source: {
          fb: '#1877F2',
          google: '#898989',
        },
        ash: { 100: '#CFCFCF', 200: '#EEEEEE' },
        rose: '#FF585D',
      },
    },
  },
  plugins: [],
};
