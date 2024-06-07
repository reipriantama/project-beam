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
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      // animation: {
      //   marquee: "marquee 20s linear infinite",
      //   marquee2: "marquee2 20s linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      //   marquee2: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(0%)" },
      //   },
      // },
    },
  },
  plugins: [],
};
