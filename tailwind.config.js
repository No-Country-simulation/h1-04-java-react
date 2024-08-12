/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/img/pattern.webp')",
      },
      colors: {
        primary: '#EA526F',
        secondary: '#25CED1',
        secondaryDark: '#1E999B',
        orangeColor: '#FF8A5B',
        orangeTransparent: '#FCEADE26',
        beigeColor: '#FCEADE',
        blueColor: '#2196f3',
        blueColorClear: '#009FF5',
        blackClear: '#1A1A1A'
      },
    },
  },
  plugins: [],
};