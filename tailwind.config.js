/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontSize: {
        "h1": "clamp(28px, 5vw, 60px)",
        "h2": "37px",
        "h3": "30px",
        "h4": "21px",
        "h5": "21px",
        "subheading": "clamp(16px, 2vw, 23px)",
        "cardText": "clamp(14px, 2vw, 16px)",
      },
      colors: {
        "primary": {
          "blue": "#252fb2",
          "black": "#282828",
          "gray": "#5b5b5b",
          "darkGray": "#595959",
        },
        "secondary": {
          "light-gray": "#f0f8ff",
          "white": "#ffffff"
        }
      },
      maxWidth: {
        "smallHeroImage": "360px",
        "desktop": "1440px"
      },
      minWidth: {
        "heroButton": "165px"
      },
      minHeight: {
        "heroButton": "62px"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        slideRight: 'slideRight 2s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
