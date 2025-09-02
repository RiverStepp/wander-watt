/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ww-ink': 'var(--ww-ink)',
        'ww-surface': 'var(--ww-surface)',
        'ww-gold': 'var(--ww-gold)',
        'ww-gold-light': 'var(--ww-gold-light)',
        'ww-navy': 'var(--ww-navy)',
        'ww-sage': 'var(--ww-sage)',
        'ww-sage-light': 'var(--ww-sage-light)',
        'ww-terracotta': 'var(--ww-terracotta)',
        'ww-cream': 'var(--ww-cream)',
        'ww-stone': 'var(--ww-stone)',
        'ww-bark': 'var(--ww-bark)',
        'ww-sky': 'var(--ww-sky)',
        'ww-moss': 'var(--ww-moss)',
        'ww-gray': {
          50: 'var(--ww-gray-50)',
          100: 'var(--ww-gray-100)',
          200: 'var(--ww-gray-200)',
          300: 'var(--ww-gray-300)',
          400: 'var(--ww-gray-400)',
          500: 'var(--ww-gray-500)',
          600: 'var(--ww-gray-600)',
          700: 'var(--ww-gray-700)',
          800: 'var(--ww-gray-800)',
          900: 'var(--ww-gray-900)',
        }
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
