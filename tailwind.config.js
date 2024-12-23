/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      /* Check for any global CSS files or libraries */
      screens: {
        'sm': '320px',
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
      animation: {
        marquee: 'marquee 30s linear infinite', // Adding the marquee animation
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // Start the text off-screen on the right
          '100%': { transform: 'translateX(-100%)' }, // Move the text off-screen to the left
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
