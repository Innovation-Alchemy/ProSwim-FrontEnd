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
        'playfair-display': ['Playfair Display', 'serif'],
        roboto: ['Roboto Mono', 'monospace'],
        'cabin-sketch': ['Cabin Sketch', 'cursive'],
        'look-sans': ['Look Sans W00 Rough Bold', 'sans-serif'],
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
