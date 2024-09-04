/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display'],
        roboto: 'Roboto Mono, monospace',
      },
    },
  },
  plugins: [],
};
