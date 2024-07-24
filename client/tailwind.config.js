/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/img/pattern.webp')",
      },
    },
  },
  plugins: [],
};