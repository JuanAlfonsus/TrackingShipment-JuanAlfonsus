/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blues: '#6C63FF'
      }
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      rubik: ['Rubik Iso']
    },
  },
  plugins: [],
}

