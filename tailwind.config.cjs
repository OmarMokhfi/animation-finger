/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Suez One', 'serif'],
      serif: ['Space Grotesk', 'sans-serif'],
    }, 
    extend: {
      colors: {
        dark: "#202020"
      },
    },
  },
  plugins: [],
}
