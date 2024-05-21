/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#31E1F7' ,
        dark: '#0f172a' ,
        biru: '#1e3a8a',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

