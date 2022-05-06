module.exports = {
  content: ['./src/index.html'],
  theme: {
    colors: {
      primary: '#111827',
      'primary-light': '#1F2937',
      secondary: '#6BA91A',
      'secondary-light': '#E2FEDB',
      light: '#E5E5E5',
      gray: '#6B7280',
      'dark-gray': '#6B7280',
      blue: '#2563EB',
      white: '#fff',
      orange: '#F59E0B',
    },
    fontFamily: {
      sans: ['Graphik', 'Arial', 'sans-serif'],
    },
    screens: {
      md: '425px',
    },
    container: {
      center: true,
      padding: '8px',
    },
    extend: {
      backgroundImage: {
        'green-gradient': 'linear-gradient(180deg, #CBD623 0%, #41701E 100%)',
        star: 'url(../images/icons/star.svg)',
      },
      backgroundPosition: {
        'star-position': 'left 4px top 3px',
      },
    },
  },
  plugins: [],
};
