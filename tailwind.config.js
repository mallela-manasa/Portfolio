/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        navy: '#191f36',
      },
      fontFamily: {
        thop:['Nunito','sans-serif']
      },
      boxShadow:{
        share:'0 0 2rem #59B2F4',
      }
    }
  },
  plugins: [],
}

