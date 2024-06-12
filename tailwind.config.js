/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontSize: {
        "h1": "3.75rem",
        "h2": "2.313rem",
        "h3": "1.875rem",
        "h4": "1.313rem",
        "h5": "1.125rem",
      },
      colors: {
        "primary": {
          "blue": "#252fb2",
          "black": "#282828",
          "gray": "#5b5b5b",
        },
        "secondary": {
          "light-gray": "#f0f8ff",
          "white": "#ffffff"
        }
      },
    },
  },
  plugins: [],
}

