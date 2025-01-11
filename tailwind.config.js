/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(40, end), blink-caret .75s step-end infinite',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
