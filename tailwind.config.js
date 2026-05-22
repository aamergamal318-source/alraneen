/** @type {import('tailwindcss').Config} */
export default {
  content: ['./website/index.html', './website/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#023c39',
          light: '#035550',
          dark: '#01201e',
        },
        gold: {
          DEFAULT: '#dca05b',
          light: '#e8b97a',
          dark: '#c4863d',
        },
        neutral: {
          50: '#f7f7f4',
          100: '#eeede9',
          200: '#d9d8d2',
          900: '#1f2933',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
