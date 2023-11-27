/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // "brand-primary":"#001124",
      "brand-primary":"#112A46",
      "brand-primary-dark":"#00050b",
      "secondary":"#006d77",
      "secondary-light":"#009caa",
      "accent":"#06174A",
      "accent2":"#ff6392",
      "errorcolor":"#ca4b54",
      "light":"#fdfefe"
    },
    fontSize: {
      s: ["14px", "27.64px"],
      m: ["18px", "34.55px"],
      base: ["24px", "41.46px"],
      l: ["28px", "41.46px"],
      xl: ["42px", "82.92px"],
      "2xl": ["48px", "138.18px"],
    },
    fontFamily: {
      rubik: ["Rubik"],
    }
  },
  
  plugins: [],
}