/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#e8eee7",
          "300": "#eaeaea",
        },
        gray1: {
          "100": "#828282",
          "200": "#1c1c1c",
          "300": "rgba(255, 255, 255, 0.8)",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "#d1d1d1",
          "300": "#ccc",
          "400": "rgba(209, 209, 209, 0.09)",
        },
        "gray-600": "#617275",
        darkgray: {
          "100": "#a6a3a0",
          "200": "#9e9d9d",
        },
        darkslategray: {
          "100": "#3c3c3c",
          "200": "#002e18",
        },
        gainsboro: "#e3e3e3",
        mediumseagreen: "#2da950",
        dimgray: "#4f4f4f",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "covered-by-your-grace": "'Covered By Your Grace'",
        switzer: "Switzer",
      },
      borderRadius: {
        "21xl": "40px",
        "81xl": "100px",
        "9xl-4": "28.4px",
        "92xl-5": "111.5px",
        "8xl-1": "27.1px",
        "46xl-3": "65.3px",
        "88xl-1": "107.1px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      base: "16px",
      mini: "15px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "3xl-8": "22.8px",
      "44xl-4": "63.4px",
      "19xl": "38px",
      "32xl": "51px",
      "5xl": "24px",
      "21xl": "40px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
