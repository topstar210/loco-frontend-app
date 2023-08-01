/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-aside": "url('../src/assets/images/login_aside.png')",
        "auth-btn": "linear-gradient(90deg, #D0BC31 0%, #F19123 100%)",
        "yellow-text": "linear-gradient(225deg, #D0BC31 0%, #F19123 100%)",
      },
      colors: {
        "main": "#252525",
        "maindark": "#101010",
        "lightdark": "#252525",
        "lightdark-font": "#7A7A7A",
        "lightdark-border": "#3F3F3F",
        "dark-toggle": "#3B3B3B",
        "dark-toggle-switch": "#D7D7D7"
      }
    },
  },
  plugins: [],
}
