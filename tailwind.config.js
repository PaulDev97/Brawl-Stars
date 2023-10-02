/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    
  ],
  theme: {
    screens: {
      
      'phone': '300px',
      md: "920px",
      lg:"1024px"
      
    },
    extend: {
      fontFamily:{
        bungee: ['Bungee Spice', 'cursive']
      }
    },
  },
  plugins: [],
}

