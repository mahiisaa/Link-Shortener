/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "brand-primary":"#001d3d",
      "secondary":"#06d6a0",
      "accent":"#669bbc",
      "accent2":"#ff6392",
      "errorcolor":"#c1121f",
      "light":"#fdfefe"

    },
    fontSize: {
      s: ["16px", "27.64px"],
      m: ["20px", "34.55px"],
      base: ["24px", "41.46px"],
      l: ["28px", "41.46px"],
      xl: ["40px", "82.92px"],
      "2xl": ["48px", "138.18px"],
    },
    fontFamily: {
      Rubik: ["Rubik"],
    }
  },
  
  plugins: [],
}