const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: '#F5F5DC',           // Cream
        text: '#333333',           // Dark Gray
        link: '#0056b3',           // Dark Blue
        'link-hover': '#003366',   // Darker Blue
        header: '#D4B886'
      },
    },
  },
};