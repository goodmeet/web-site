/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-900": "#FFFFFF",
        "white-800": "#F4F4F4",
        "white-700": "#ECECEC",
        "white-600": "#D7D7D7",
        "white-500": "#C6C6C6",
        "gray-400": "#666666",
        "gray-500": "#888888",
        "gray-600": "#aaaaaa",
        "gray-700": "#cacaca",
        "primary-500": "#7462E8",
        "secondary-500": "#BBA999",
      },
      fontSize: {
        headline1: "32px",
        headline2: "26px",
        headline3: "22px",
        title2: "20px",
        body1: "18px",
        body2: "16px",
        body3: "15px",
        body4: "14px",
        caption: "12px",
      },
    },
  },
  plugins: [],
};
