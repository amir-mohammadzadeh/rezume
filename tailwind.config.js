/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-17': 'repeat(auto-fill, minmax(0, 17rem))',
        'auto-14': 'repeat(auto-fill, 14rem)',
      },
      boxShadow: {
        '101': '0 0 10px 1px #00000075',
        '5.2': '0 0 5px 2px #46464640',
      },
      colors:{
        dark:{
          500:'#333333',
          400:'rgb(65,65,65)'
        },
      },
      
    },
    screens: {
      '2xl': {'max': '1385px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '992px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
