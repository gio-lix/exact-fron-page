module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    borderColor: theme => ({
      ...theme('colors'),
      'burger': '#5e6577',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'bar': '#3F98A0',
      'barHover': '#4ab2bb',
      'menu': '#1E2736',
      'footer': '#212C3E',
      'menu-active': '#797D86',
      'list': '#F0F0F0',
      'bgList': '#F5F5F5',
      'logo': '#C4C4C4',
      'menuList': '#797D86',
      'burger': '#1e2736',
      'burgerHover': '#5e6577',


    }),
    scale: {
      '102': '1.1'
    },

    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
        'Open_Sans': ['Open Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
