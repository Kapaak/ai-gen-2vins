/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["Titillium Web"],
      body:["Titillium Web"]
    },
    extend: {
      colors:{
        black:"#131313",
        background:"#f9f9f9"
      }
    },
  },
  plugins: [],
}