/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '930px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        paleCyan: 'hsl(193, 100%, 96%)',
        darkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
      },
    },
  },
  plugins: [],
};
