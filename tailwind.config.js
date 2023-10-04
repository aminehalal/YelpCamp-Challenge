/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "campground.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
        'orange-100' : '#F5F0EA'
      },
      backgroundImage: {
        'hero': "url('Assets/Hero Image.jpg')", // Define your background image URL here
      },

    },
  },
  plugins: [],
}

