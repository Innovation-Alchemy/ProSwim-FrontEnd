/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: 20,
    },
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display'],
        roboto: 'Roboto Mono, monospace',
        splash: '"Splash", cursive',
        'cabin-sketch': '"Cabin Sketch", cursive',
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
