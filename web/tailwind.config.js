/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 12s 02s alternate infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-75%)" },
        },
      },
      fontFamily: {
        text: [ ' "PT Sans"', "serif"],
        monospace: ['"Source Code Pro"', "monospace"],
        title: ['"Yantramanav"', "sans-serif"],
      },
      backgroundImage: {
        "ny-anio": "url('./src/assets/nyanio-screenshot.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
