/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#b11226", // wine red color
        cream: {
          DEFAULT: "#f5f5dc", // cream color
          100: "#fafaf0",
          200: "#f0ead6",
          300: "#e5dbcd",
        },
        gold: "#ffd700", // gold color
      },
    },
  },
  plugins: [],
}

