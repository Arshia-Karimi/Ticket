/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dana: ["dana"],
      },
      colors: {
        color: ["rgba(0, 0, 0, 0.54)"],
      },
      width: {
        width: ["calc(100% + 2px)"],
      },
    },
  },
  plugins: [],
};
