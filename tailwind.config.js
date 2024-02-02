/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        'whitesmoke': {
          DEFAULT: 'rgb(248,248,248)',
        }
      }
    },
  },
  plugins: [],
}

