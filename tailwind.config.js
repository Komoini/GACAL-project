/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'GACAL-background': "url('/src/images/My project.jpg')",
        'fore-word-bg': "url('/src/images/get_involved.jpeg')"
      }
    },

  },
  plugins: [
  ],
}
