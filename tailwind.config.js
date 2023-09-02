/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-text-color': '#7a878d',
        'custom-success-color': '#09c725',
        'custom-success-hover-color': '#09e85e1a',
        'custom-error-color': '#e23939',
        'custom-button-hover-bg-color': '#fefdfb',
      },
      boxShadow: {
        'custom-input-shadow': '0 0 4px 2px #09e85e',
        'custom-button-shadow': '0 0 14px 2px #09e85e',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
};
