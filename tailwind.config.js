/** @type {import('tailwindcss').Config} */
module.exports = {

  // TW will scan content files for calss names
  // and generate only the necessary CSS. Files
  // are specified relative to project root.
  content: ["./views/**/*.{html,hbs}"],
  theme: {
    extend: {
      colors: {
        'base': '#000C1B',
        'night-blue': '#001126',
        'evergreen-base': '#085E5C',
        'evergreen-mid': '#074946',
        'evergreen-top': '#63531', 
      }
    },
  },
  plugins: [],
}

