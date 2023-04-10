const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'ui-',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        'tile-start-rgb': 'rgba(2, 13, 46,1)',
        'tile-end-rgb': 'rgba(2, 5, 19,1))',
        light: {
          500: 'rgba(var(--text-color-primary), 1)',
        },
      },
      boxShadow: {
        button: '0px 10px 10px rgba(251, 68, 109, 0.2)',
        'gradient-button-hover': '0px 0px 10px #475E79',
        'gradient-button-active': '0px 0px 4px #475E79',
      },
      backgroundImage: {
        'accent-button': 'linear-gradient(180deg, #FF3F66 0%, #E75784 100%)',
        'accent-button-hover':
          'linear-gradient(180deg, #C43352 0%, #C43352 100%)',
        'accent-button-active':
          'linear-gradient(180deg, #AE2F4B 0%, #AE2F4B 100%)',
        'gradient-button': 'linear-gradient(90deg, #465E79 0%, #4B3F4F 100%)',
      },
    },
  },
  plugins: [],
};
