module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#88F982;',
          800: '#055101;',
        },
        card:{
          light: '#F5F5F5',
          dark: '#4C4D54'
        },
       "card-text":{
          dark:'#b6b3b3',
          light:'#575757',
        }

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
