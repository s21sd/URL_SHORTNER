/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Cyan': 'hsl(180, 66%, 49%)',
        'Dark Violet': 'hsl(257, 27%, 26%)',
        'Light': 'rgb(220,220,220)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '500': 500,
        '700': 700,
      },
      screens: {
        'phones': '360px',
        'tablet': '640px',
        'desktop': '1024px',
        'big-desktop': '1280px',
      },
    },
  },
  plugins: [],
}

