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
      brandPurple: "#89287C",
      selected: "#333333"
    }),
    textColor: theme => ({
      ...theme("colors"),
      lightgrey: "#7F8C99",
      "grayish-red": "#796B6B",
      dark: "#333333",
      brandPurple: "#89287C"
    }),
    fontSize: {
      xxs: ".70rem",
      xxxs: ".60rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")]
};
