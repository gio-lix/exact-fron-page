module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bar': '#3F98A0',

    }),
    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
