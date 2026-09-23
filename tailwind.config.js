/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a192f', /* Base 1: Deep Navy Blue */
          light: '#ffffff', /* Base 2: Stark White */
          accent: '#f59e0b', /* Base 3: Amber Action */
        }
      },
      animation: {
        'liquid': 'liquid 3s linear infinite',
      },
      keyframes: {
        liquid: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-20px) rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
