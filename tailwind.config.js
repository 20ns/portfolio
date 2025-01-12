/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in-card-left': 'slide-in-card-left 0.5s ease-out forwards',
        'slide-in-card-right': 'slide-in-card-right 0.5s ease-out forwards',
      },
      keyframes: {
        'slide-in-card-left': {
          from: { transform: 'translateX(-50%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-card-right': {
          from: { transform: 'translateX(50%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};