/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beVietnam: ['Be Vietnam Pro', 'sans-serif'],
        waterBrush: ['Water Brush', 'cursive']
      },
      backgroundImage: {
        'home': "url('./src/assets/home-bg.png')",
      }
    },
  },
  plugins: [],
}