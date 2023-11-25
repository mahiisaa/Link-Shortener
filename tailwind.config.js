/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "brand-primary":"#001124",
      "secondary":"#006d77",
      "secondary-light":"#009caa",
      "accent":"#669bbc",
      "accent2":"#ff6392",
      "errorcolor":"#c1121f",
      "light":"#fdfefe"
    },
    fontSize: {
      s: ["14px", "27.64px"],
      m: ["18px", "34.55px"],
      base: ["24px", "41.46px"],
      l: ["28px", "41.46px"],
      xl: ["40px", "82.92px"],
      "2xl": ["48px", "138.18px"],
    },
    fontFamily: {
      vazirmatn: ["Vazirmatn"],
    }
  },
  
  plugins: [],
}