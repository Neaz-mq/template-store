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
        marquee: 'marquee 25s linear infinite', // Default duration for 3xl
        'marquee-sm': 'marquee 17s linear infinite', // Adjusted duration for smaller screens
        'marquee-tablet': 'marquee 22s linear infinite',
        'marquee-laptop': 'marquee 20s linear infinite',
        'marquee-desktop': 'marquee 17s linear infinite',
        'marquee-2xl': 'marquee 20s linear infinite',
       
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
