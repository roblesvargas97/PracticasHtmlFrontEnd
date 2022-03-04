module.exports = {
  content: ['./dist/*.html','./src/**/*.{js,jsx,ts,tsx}','./public/*.html'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: "#DD2F2F",
        secondary: "#53D006",
        terciary: "#FFFAF4",
      }),
      textColor: {
        primary: "#DD2F2F",
        secondary: "#53D006",
        terciary: "#FFFAF4",
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  variants: {
    width: ["responsive" , "hover" , "focus"],
  },
  plugins: [],
}
