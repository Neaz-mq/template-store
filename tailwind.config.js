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
        sm: '320px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        '2xl': '1536px',
        '3xl': '1683px',
      },
      container: {  
        center: true,
        padding: '1rem',
        screens: {
          sm: '320px',
          tablet: '640px',     
          laptop: '1024px',    // maps to `lg`
          desktop: '1280px',  // maps to `xl`
          '2xl': '1536px',
          '3xl': '1683px',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
