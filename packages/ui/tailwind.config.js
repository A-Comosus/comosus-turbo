/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    300: '#717B8C',
    400: '#63728C',
    500: '#55688C',
    600: '#465573',
    700: '#364259',
  },
  secondary: {
    300: '#ED85A1',
    400: '#ED557E',
    500: '#ED265C',
    600: '#BA1E48',
    700: '#871634',
  },
  tertiary: {
    300: '#FFC785',
    400: '#FFAF52',
    500: '#FF971E',
    600: '#CC7918',
    700: '#995B12',
  },
  accent: {
    300: '#D9FFA8',
    400: '#B8FF5C',
    500: '#A2FF2A',
    600: '#82CC22',
    700: '#619919',
  },
  neutral: {
    50: '#F8F5F1',
    100: '#ADB2C6',
    200: '#7B8291',
    300: '#656778',
    400: '#4B4C5E',
    500: '#3B3C46',
    600: '#2B2C33',
    700: '#202126',
    800: '#1D1C1F',
    900: '#1B181E',
  },
  error: '#FF0000',
  success: '#00CC14',
};

const gradients = {
  'gradient-vertical-300': `linear-gradient(180deg, ${colors.primary[300]} 0%, ${colors.primary[400]} 100%)`,
  'gradient-vertical-400': `linear-gradient(180deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`,
  'gradient-vertical-500': `linear-gradient(180deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
  'gradient-horizontal-400': `linear-gradient(90deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`,
  'gradient-horizontal-500': `linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
};

const fontSize = {
  display: ['3.812rem', '120%'],
  h1: ['3.062rem', '120%'],
  h2: ['2.438rem', '120%'],
  h3: ['1.938rem', '120%'],
  h4: ['1.562rem', '120%'],
  h5: ['1.250rem', '120%'],
  body: ['1.000rem', '150%'],
  'body-sm': ['0.812rem', '120%'],
  'body-xs': ['0.625rem', '120%'],
};

const boxShadow = {
  'glow-md': '0px 0px 8px',
  'glow-lg': '0px 0px 12px',
  'inset-2': `inset 0 0 0 .125rem`,
};

module.exports = {
  prefix: 'ui-',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        ...gradients,
      },
      fontSize,
      boxShadow,
    },
  },
  plugins: [],
};
