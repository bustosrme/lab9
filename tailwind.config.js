module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'chivo' : ['Chivo', 'sans-serif'],
        'comfortaa' : ['Comfortaa', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
