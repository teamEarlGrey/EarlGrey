module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px #77a7bf, -1px 1px #77a7bf,1px -1px #77a7bf,-1px -1px #77a7bf,1px 0px #77a7bf,0px 1px #77a7bf, -1px 0px #77a7bf,0px -1px #77a7bf;"
        }
      };

      addUtilities(newUtilities);
    }
  ]
};
