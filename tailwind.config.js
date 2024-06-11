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
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
