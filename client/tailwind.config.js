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
        orangeColor: '#FF8A5B',
        beigeColor: '#FCEADE'

      },
    },
  },
  plugins: [],
};
