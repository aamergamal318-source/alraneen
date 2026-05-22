/** @type {import('tailwindcss').Config} */
export default {
  content: ['./website/index.html', './website/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a3d3a',
          light: '#0e5450',
          dark: '#061f1d',
          50: '#edf7f6',
          100: '#d0eeec',
          200: '#a1ddd9',
          800: '#0c4542',
        },
        gold: {
          DEFAULT: '#c9912d',
          light: '#dba84a',
          dark: '#a87220',
          50: '#fdf6ea',
          100: '#f9e9c4',
        },
        teal: {
          DEFAULT: '#1a7a74',
          light: '#22978f',
          dark: '#145f5a',
        },
        neutral: {
          50: '#f8f8f5',
          100: '#eeede8',
          200: '#dddcd6',
          300: '#c4c2ba',
          400: '#a09e95',
          500: '#7d7b72',
          600: '#5e5c55',
          700: '#46443e',
          800: '#302e29',
          900: '#1e1c18',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'slide-up': 'slideUp 0.7s ease-out both',
        'slide-in-right': 'slideInRight 0.7s ease-out both',
        'slide-in-left': 'slideInLeft 0.7s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'ripple': 'ripple 3s ease-out infinite',
        'ripple-slow': 'ripple 4.5s ease-out infinite',
        'ripple-slower': 'ripple 6s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 2px 20px 0 rgba(10, 61, 58, 0.07)',
        'card-hover': '0 8px 40px 0 rgba(10, 61, 58, 0.14)',
        'gold': '0 4px 20px 0 rgba(201, 145, 45, 0.25)',
        'primary': '0 4px 20px 0 rgba(10, 61, 58, 0.25)',
      },
      transitionDelay: {
        '150': '150ms',
        '300': '300ms',
        '450': '450ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
