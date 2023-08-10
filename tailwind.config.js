/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    keyframes: {
      moveRight: {
        "0%": { transform: "translate(0%)" },
        "50%": { transform: "translate(10px)" },
        "100%": { transform: "translate(0%)" },
      },
    },
    animation: {
      moveRight: "moveRight 1s ease-in-out infinite",
    },
  },
  plugins: [],
}
