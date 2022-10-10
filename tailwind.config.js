/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'moradoFuerteF5':'#4311B9',
        'naranjaF5' :'#FF4700',
        'lilaF5':'#CBBFE8',
        'cianF5':'#33C8CD',
        'rositaF5':'#FED2C0',
      },
      backgroundSize:{
        '50%': '50%',
        '100%': '100%',
        '16': '4rem'
      },
      screens:{
        'md': '414px',      }

    },
  },
  plugins: [],
}
