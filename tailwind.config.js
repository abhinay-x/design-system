/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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