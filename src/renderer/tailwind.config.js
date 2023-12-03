const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        adoptgram: {
          gray: {
            50: '#2C2828',
          },
          orange: {
            100: '#FBE9CD',
            500: '#F7D3A4',
          },
          blue: {
            300: '#6C8EAD',
            800: '#195891',
          },
          error: '#D94E41',
        },
      },
      keyframes: {
        slideIn: {
          from: { width: 0 },
          to: { width: 'var(--radix-collapsible-content-width)' },
        },
        slideOut: {
          from: { width: 'var(--radix-collapsible-content-width)' },
          to: { width: 0 },
        },
      },
      animation: {
        slideIn: 'slideIn 0.25s',
        slideOut: 'slideOut 0.25s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.region-drag': { '-webkit-app-region': 'drag' },
        '.region-no-drag': { '-webkit-app-region': 'no-drag' },
      });
    }),
  ],
};
