/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3440',
        secondary: '#4A5568',
        accent: '#48BB78',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
        'culture-pattern': "url('/src/assets/images/culture-bg.jpg')",
        'activities-pattern': "url('/src/assets/images/activities-bg.jpg')",
      },
    },
  },
  plugins: [],
} 