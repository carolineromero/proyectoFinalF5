/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {

      colors:{
        'moradoFuerteF5':'#4312B9',
        'naranjaF5' :'#FF4700',
        'lilaF5':'#CBBFE8',
        'cianF5':'#33C8CD',
        'rositaF5':'#FED3C0',
        'grisF5':'#F6F3FF',
        'grisly2F5':'#E3E5FF',
      },
      backgroundSize:{
        '50%': '50%',
        '100%' : '100%',
        '16' : '4rem'
      },
    },
  },
  plugins: [],
}
