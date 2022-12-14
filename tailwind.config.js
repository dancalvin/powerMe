/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#6D7B9B",
      secondary: "#FAF4ED",
      third: "#A3C2C4",
      forth: "#545b89",
      white: "#FFFFFF",
      transparent: "transparent",
      black: "#000000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    backgroundColor: {
      primary: "#6D7B9B",
      secondary: "#FAF4ED",
      third: "#A3C2C4",
      forth: "#545b89",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
