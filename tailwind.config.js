module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : theme =>({
        'bkg-img' : "url('/images/bg.jpg')"
      })
    },
  },
  plugins: [],
}
