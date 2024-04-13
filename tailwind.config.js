/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  theme: {
    screens: {
      s: '100px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: {
          100: "#eef6f6",
          200: "#cde4e5",
          300: "#abd3d3",
          400: "#8ac1c2",
          500: "#68afb1",
          600: "#4e9697",
          700: "#3d7575",
          800: "#2c5354",
          900: "#1a3232",
        },
        secondary: {
          100: "#edf7f1",
          200: "#cae7d5",
          300: "#a7d8b9",
          400: "#84c89c",
          500: "#60b880",
          600: "#479f67",
          700: "#377b50",
          800: "#275839",
          900: "#183522",
        },
        ternary: { 500: "#d5f0c1" },
        quaternary: { 500: "#f9f7c9" },
        texts: {
          normal: "#363636",
          light: "#666666",
        },
      },
      fontFamily: {
        primary: ['"Lora"', "serif"],
      },
    },
  },
  plugins: [],
};
