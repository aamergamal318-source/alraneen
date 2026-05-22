/** @type {import('tailwindcss').Config} */
export default {
  content: ['./website/index.html', './website/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /*
         * PRIMARY — Deep Professional Navy Blue
         * Universally trusted: institutions, NGOs, governments worldwide
         * Contrast on white: 10.7:1 (WCAG AAA)
         */
        primary: {
          DEFAULT: '#00535c',
          light:   '#08727c',
          dark:    '#003840',
          50:      '#eefafa',
          100:     '#d3f1f0',
          200:     '#a9dfdf',
          800:     '#00424a',
        },

        /*
         * ACCENT — Vibrant Teal
         * Growth, hope, community, modernity
         * Contrast on white: 3.8:1 (large text); dark variant 5.4:1 (AA)
         */
        teal: {
          DEFAULT: '#0a7f78',
          light:   '#12a198',
          dark:    '#075f5d',
          50:      '#eefbfa',
          100:     '#cef4f0',
        },

        /*
         * HIGHLIGHT — Warm Amber
         * Energy, warmth, CTA — the action color
         * dark variant on white: 4.6:1 (AA)
         */
        gold: {
          DEFAULT: '#c8912c',
          light:   '#dea943',
          dark:    '#9c6a18',
          50:      '#fff9ec',
          100:     '#f8e7bc',
        },

        /*
         * NEUTRAL — Clean Slate-based grays (slightly cool tone)
         * Feels modern and spacious vs warm beige-grays
         */
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },

      fontFamily: {
        sans: ['Cairo', 'Segoe UI', 'Arial', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        /* Hero gradient — deep navy fade */
        'hero-gradient': 'linear-gradient(135deg, #003840 0%, #00535c 54%, #08727c 100%)',
        /* Accent section gradient */
        'teal-gradient': 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
      },

      animation: {
        'fade-in':       'fadeIn 0.7s ease-out both',
        'slide-up':      'slideUp 0.7s ease-out both',
        'scale-in':      'scaleIn 0.5s ease-out both',
        'ripple':        'ripple 3s ease-out infinite',
        'ripple-slow':   'ripple 4.5s ease-out infinite',
        'ripple-slower': 'ripple 6s ease-out infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':         'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                                    '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(28px)' },     '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.92)' },          '100%': { opacity: '1', transform: 'scale(1)' } },
        ripple:  { '0%': { transform: 'scale(0.8)', opacity: '0.5' },         '100%': { transform: 'scale(2.4)', opacity: '0' } },
        float:   { '0%, 100%': { transform: 'translateY(0)' },                '50%': { transform: 'translateY(-8px)' } },
      },

      boxShadow: {
        'card':       '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 4px 16px 0 rgb(0 83 92 / 0.06)',
        'card-hover': '0 4px 8px 0 rgb(0 0 0 / 0.06), 0 12px 32px 0 rgb(0 83 92 / 0.13)',
        'navy':       '0 4px 20px 0 rgb(0 83 92 / 0.26)',
        'teal':       '0 4px 20px 0 rgb(10 127 120 / 0.28)',
        'amber':      '0 4px 20px 0 rgb(200 145 44 / 0.28)',
        /* keep alias 'gold' and 'primary' pointing to same */
        'gold':       '0 4px 20px 0 rgb(200 145 44 / 0.28)',
        'primary':    '0 4px 20px 0 rgb(0 83 92 / 0.28)',
      },
    },
  },
  plugins: [],
}
