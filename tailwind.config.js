// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme("colors"),
      darkgrey: "#C1C0C9",
      lightgrey: "#F6F6F6",
      FB: "#384FA2",
      brandPurple: "#89287C"
    }),
    textColor: theme => ({
      ...theme("colors"),
      lightgrey: "#7F8C99",
      "grayish-red": "#796B6B",
      dark: '#333333',
      brandPurple: "#89287C"
    })
  },
  variants: {},
  plugins: []
};
