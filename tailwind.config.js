/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'tooltip-fade-in': 'tooltipFadeIn 0.2s ease-in forwards',
        'fade-in': 'fadeIn 0.2s ease-in forwards',
      },
      keyframes: {
        tooltipFadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        primary: {
          500: '#2563EB', //  primary color
          // for more shades (100–900)
        },
        secondary: {
          500: '#7C3AED', 
        },
        tertiary: {
          500: '#059669', 
        },
        neutral: {
          100: '#F5F5F5',
          900: '#1F2937',
        },
        semantic: {
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class', //light/dark themes
};