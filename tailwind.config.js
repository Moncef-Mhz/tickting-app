/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        dark: "#222831",
        "dark-gray": "#393E46",
        cyan: "#00ADB5",
        card: "#47566a",
        light: "#EEEEEE",
      },
      colors: {
        dark: "#222831",
        "dark-gray": "#393E46",
        cyan: "#00ADB5",
        card: "#47566a",
        light: "#EEEEEE",
      },
      keyframes: {
        strike: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      animation: {
        strike: "strike 2s linear 1 forwards",
      },
    },
  },
  plugins: [],
};
