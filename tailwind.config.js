module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        'Sora': ['Sora', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        "gif-tick": "url('/src/assets/checked.gif')",
      }),
      colors: {
        navbar: "#1b232e",
        darkshade:"#222d3d",
        brightBlue: "#1539c8",
      },
      boxShadow:{
        '3xl':'0px 0px 3px 3px rgba(18, 22, 246, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
