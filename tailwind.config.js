/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1A', 
        'secondary': '#D3176D', 
      },
      fontFamily: {
        serif: ['Orbitron', ]
      },
    },
  },
  plugins: [],
}