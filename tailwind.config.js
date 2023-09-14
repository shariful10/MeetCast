/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2130",
        secondary: "#6B7CFF",
        darkBg: "#0F0E2C",
      },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundColor: {
        bgGradient:
          "2762.36% 537.65% at -49.50% -250.00%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%",
      },
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
  daisyui: {
    themes: ["light"],
  },
};
