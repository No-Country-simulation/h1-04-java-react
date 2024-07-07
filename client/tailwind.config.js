/** @type {import('tailwindcss').Config} */
import { forms as formsPlugin } from '@tailwindcss/forms';// Importa el plugin de Tailwind para formularios
import debugScreensPlugin from 'tailwindcss-debug-screens';// Importa el plugin de debug screens

export default {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#792ba6',
          50: '#faf5ff',
          75: '#f3e9fb',
          100: '#f0defa',
          200: '#daaef2',
          300: '#b471da',
          400: '#9a41ce',
          500: '#792ba6',
          600: '#612386',
          700: '#4a1a65',
          800: '#321245',
          900: '#1b0924',
        },
      },
      backgroundImage: {
        pattern: "url('/img/pattern.webp')",
      },
    },
  },
  plugins: [
    formsPlugin,
    debugScreensPlugin({
      style: {
        backgroundColor: '#2eea36',
        color: '#000',
      },
    }),
  ],
};
