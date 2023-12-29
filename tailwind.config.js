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
        '420': '420px',
        '450': '450px',
        '500': '500px',
        '624': '624px',
      },
    },
  },
  plugins: [],
}

