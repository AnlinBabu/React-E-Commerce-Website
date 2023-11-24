/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarylight: "#ffffff",
        primary1dark: "#363738",
        backgroundblack: "#000000",
        bordercolor: "rgba(0, 0, 0, 0.084)",
        secondarylight: "#f5f5f5",
        secondarycream: "#fefaf1",
        secondaryred: "#ff2e60",
        secondary2: "#DB4444",
        button1: "#00ba88",
        hoverbutton1: "#00966d",
        hoverbutton2: "#a0bce0",
        background: "#ffffff",
        text1: "#fafafa",
        hoverbutton: "#E07575",

        text2: "#7d8184",
        text3: "#504242",
        button: "#000000",
      },
    },
  },
  plugins: [],
};
