/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5E8C7",
        bglight: "#DEBA9D",
        bgdark: "#9E7777",
        bgvar: "#6F4C5B",
        bggold: "#ECB390",

        textlight: "#d2d0d0",
        textdark: "#47474c",
        texttoxic: "#3CCF4E",

        highlight: "#e6bd6c",
        glass: "rgba(185, 185, 185, 0.2)",
      },
    },
  },
  plugins: [  
    require("@tailwindcss/line-clamp"),

  ],
}
