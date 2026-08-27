/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        header: ['Ranade', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#041915',
        surface: '#0B2A22',
        accent: {
          DEFAULT: '#BF8C73',
          light: '#D9B49C',
          dark: '#8C6650',
        },
      },
      scrollMargin: {
        nav: '6.5rem',
      },
    },
  },
  plugins: [],
}

