/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        wine: {
          100: "#f7dade",
          200: "#efb4bc",
          300: "#e78f9b",
          400: "#df6979",
          500: "#d74458",
          600: "#ac3646",
          700: "#812935",
          800: "#561b23",
          900: "#2b0e12",
        },
      },
    },
  },
  plugins: [],
};
