/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        'whitesmoke': {
          DEFAULT: 'rgb(248,248,248)',
        }
      },
      keyframes: {
        'sticky-header': {
          '0%' : { transform: 'translateY(-100%)'},
          '100%' : { transform: 'translateY(0)'},
        },
      },
      animation: {
        'sticky-header': 'sticky-header 0.3s ease-in',
      }
    },
  },
  plugins: [],
}

