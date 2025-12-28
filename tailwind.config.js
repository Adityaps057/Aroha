/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          100: '#E7EBE4',
          200: '#CFD7C9',
          300: '#B6C2AF',
          400: '#9EAE94',
          500: '#869A79', // Base Sage
          600: '#6B7B61',
          700: '#505C48',
          800: '#363D30',
          900: '#1B1F18',
        },
        beige: {
          100: '#FDFBF7',
          200: '#F7F3E8',
          300: '#F0EBDA', // Warm Beige
          400: '#EAE3CB',
          500: '#E4DBBD',
          600: '#B6AF97',
          700: '#898371',
          800: '#5B584C',
          900: '#2D2C26',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#4A4A4A',
          dark: '#1A1A1A',
        },
        'earth-dark': '#1C1C1C', // Dark mode background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
