/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        footerBg:'#F3F8FC',
        buttonBg:'#0D73C1',
        testBg:'#ECF4FA'
      },
    },
  },
  plugins: [],
}

