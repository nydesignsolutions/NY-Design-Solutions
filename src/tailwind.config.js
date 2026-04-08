// Tailwind CDN runtime configuration
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef6ff',
          100: '#d9eaff',
          500: '#0a84ff',
          600: '#0066d6',
          700: '#004a99',
          800: '#003670',
          900: '#001f44',
        },
        accent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0, 74, 153, 0.2)',
      },
    },
  },
};
