/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        LightGrey: '#bebfc5',
        MediumGrey: '#9da2a4',
        StrongGrey: '#47494a',
      },
      boxShadow: {
        '3xl': '16px 16px 32px #c8c8c8',
      },
    },
  },
  plugins: [],
};
