module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : (theme) => ( {
        // "bg-hero" : "url('/src/assets/confetti-doodles.svg)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
