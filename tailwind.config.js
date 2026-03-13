/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF6EF',
        surface: '#FFFDF8',
        primary: {
          DEFAULT: '#A3261B',
          foreground: '#FFFFFF',
          light: '#C43D2F',
          dark: '#7A1D14',
        },
        accent: {
          DEFAULT: '#C9A96E',
          light: '#DFC89A',
          dark: '#A88B4A',
        },
        secondary: {
          DEFAULT: '#6B4226',
          light: '#8B5E3C',
          dark: '#4A2E1A',
        },
        muted: {
          DEFAULT: '#F0E8DA',
          foreground: '#6B5B4E',
        },
        foreground: '#2C1810',
        border: '#E2D5C3',
        ring: '#A3261B',
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
