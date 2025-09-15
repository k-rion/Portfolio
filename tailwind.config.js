import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
        fadeOut: "fadeOut 0.8s ease-in-out forwards",
        fadeUp: "fadeUp 0.8s ease-in-out forwards",
        fadeDown: "fadeDown 0.8s ease-in-out forwards",
        fadeLeft: "fadeLeft 0.8s ease-in-out forwards",
        fadeRight: "fadeRight 0.8s ease-in-out forwards",
      },
      colors: {
        primary: "#00bcd4", // Choose your primary color
      },
    },
  },
  plugins: [daisyui],
};
