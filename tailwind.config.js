// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        backgroundColor: theme => ({
            ...theme("colors"),
            "darkgrey":"#C1C0C9",
          }),
        textColor: theme => ({
            ...theme("colors"),
            "lightgrey": "#7F8C99",
            "grayish-red":"#796B6B",
          }),
    },
    variants: {},
    plugins: [],
}