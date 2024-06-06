/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "20p": "0.2em", // 20% letter-spacing
      },
      colors: {
        navy: "#101828",
        yellow: "#FFD442",
        orange: "#FF7614",
        blue: "#174EDA",
      },
      fontFamily: {
        beVietnamPro: ["Be Vietnam Pro"],
        satoshi: ["Satoshi"],
        hankenGrotesk: ["Hanken Grotesk"],
      },
    },
  },
  plugins: [],
};
