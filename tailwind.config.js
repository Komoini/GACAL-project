/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.html"],
  theme: {
    extend: {
      backgroundImage: {
        "fore-word-bg": "url('https://149863985.v2.pressablecdn.com/wp-content/uploads/get_involved.jpeg')",
        "about-us-bg": "url('https://149863985.v2.pressablecdn.com/wp-content/themes/cfa/images/kids.jpg')",
        "donate-bg": "url('https://149863985.v2.pressablecdn.com/wp-content/uploads/AdobeStock_110039481-1024x341.jpeg')",
      },
      fontFamily:{
        "paragraph": ["Asap, sans-serif;"],
        "head-5":["Josefin Sans, sans-serif;"],
        "head-2":[" Saira Condensed, sans-serif"]
      }
    },
  },
  plugins: [],
};
