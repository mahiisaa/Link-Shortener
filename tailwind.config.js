/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "brand-primary":"#041444",
      "secondary":"#f37c62",
      "accent":"#3369e7",
      "errorcolor":"#c1121f"

    },
    fontSize: {
      s: ["16px", "27.64px"],
      m: ["20px", "34.55px"],
      base: ["24px", "41.46px"],
      xl: ["48px", "82.92px"],
      "2xl": ["64px", "138.18px"],
    },
    fontFamily: {
      yekan: ["Rubik"],
    }
  },
  
  plugins: [],
}