/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display'],
        roboto: 'Roboto Mono, monospace',
        splash: '"Splash", cursive',
      },
      backgroundImage: {
        'auth-background':
          "url('/src/assets/authentication/authentication_bg.svg')",
      },
      colors: {
        primary: {
          DEFAULT: '#1E5C97',
          foreground: '#fff',
        },
        muted: '#00000099',
      },
    },
  },
  plugins: [],
};
