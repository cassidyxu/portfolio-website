/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#214373',
      },
      width: {
        '300': '300px',
        '624': '624px',
      },
    },
  },
  plugins: [],
}

