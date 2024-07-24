/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        '2xl': '1536px',
        '3xl': '1683px',
      },
      container: {
        center: true,
        padding: '1rem', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
