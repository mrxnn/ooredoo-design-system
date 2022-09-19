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
          red: '#FF0000',
        },
        cherry: {
          100: '#ED1C24',
          200: '#D6001C',
        },
        source: {
          fb: '#1877F2',
          google: '#898989',
        },
        ash: { 100: '#CFCFCF', 200: '#EEEEEE' },
        rose: '#FF585D',
      },
      fontFamily: {
        rubik: 'Rubik',
        NotoSans: 'Noto Sans',
        outfit: 'Outfit',
      },
    },
  },
  plugins: [],
};
