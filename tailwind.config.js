/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF0000',
        },
      },
    },
  },
  plugins: [],
};
