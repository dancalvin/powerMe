/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      s1: "#405f53",
      s2: "#f7a08c",
      s3: "#f2644e",
      s4: "#95b6a8",
      s5: "#6d7b9b",
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
      s1: "#405f53",
      s2: "#f7a08c",
      s3: "#f2644e",
      s4: "#95b6a8",
      s5: "#6d7b9b",
      primary: "#6D7B9B",
      secondary: "#FAF4ED",
      third: "#A3C2C4",
      forth: "#545b89",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    backgroundImage: {
      gradient1:
        "linear-gradient(90deg, rgba(242, 100, 78, 0) 23.75%, #f2644e 40%, rgba(242, 100, 78, 0) 55.18% )",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
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
    maxWidth: {
      page: "1200px",
    },

    screens: {
      "2xl": "1240px",
      xl: "1024px",
      lg: "840px",
      md: "700px",
      sm: "540px",
    },
  },
  plugins: [],
};
