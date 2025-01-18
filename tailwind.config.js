/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in-card-left': 'slide-in-card-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-card-right': 'slide-in-card-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'tech-tag-pop': 'tech-tag-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'nav-appear': 'nav-appear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Added nav-appear animation
      },
      keyframes: {
        'slide-in-card-left': {
          '0%': { 
            transform: 'translateX(-50%) translateY(20px)', 
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0) translateY(0)', 
            opacity: '1' 
          }
        },
        'slide-in-card-right': {
          '0%': { 
            transform: 'translateX(50%) translateY(20px)', 
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0) translateY(0)', 
            opacity: '1' 
          }
        },
        'fade-up': {
          '0%': { 
            transform: 'translateY(30px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          }
        },
        'scale-in': {
          '0%': { 
            transform: 'scale(0.8)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          }
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)'
          }
        },
        'tech-tag-pop': {
          '0%': { 
            transform: 'scale(0.8) translateY(10px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1) translateY(0)', 
            opacity: '1' 
          }
        },
        'nav-appear': { // Added nav-appear keyframes
          '0%': {
            transform: 'translateX(100px) translateY(-50%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0) translateY(-50%)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};